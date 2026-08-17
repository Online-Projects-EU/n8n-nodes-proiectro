import { createHmac } from 'crypto';
import { NodeConnectionTypes } from 'n8n-workflow';
import type {
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

const SIGNATURE_HEADER = 'x-webhook-signature';
const MAX_AGE_SECONDS = 300; // 5 minutes — reject older payloads (replay protection)

function verifySignature(secret: string, signature: string, rawBody: string): boolean {
	// Format: t={timestamp},v1={hex_digest}
	const parts: Record<string, string> = {};
	for (const pair of signature.split(',')) {
		const idx = pair.indexOf('=');
		if (idx > 0) {
			parts[pair.slice(0, idx)] = pair.slice(idx + 1);
		}
	}

	const timestamp = parts.t;
	const v1 = parts.v1;
	if (!timestamp || !v1) return false;

	// Replay protection
	const age = Math.floor(Date.now() / 1000) - parseInt(timestamp, 10);
	if (isNaN(age) || age > MAX_AGE_SECONDS || age < -MAX_AGE_SECONDS) return false;

	// Verify HMAC-SHA256: sign("{timestamp}.{body}")
	const expected = createHmac('sha256', secret)
		.update(`${timestamp}.${rawBody}`)
		.digest('hex');

	// Constant-time comparison
	if (expected.length !== v1.length) return false;
	let mismatch = 0;
	for (let i = 0; i < expected.length; i++) {
		mismatch |= expected.charCodeAt(i) ^ v1.charCodeAt(i);
	}
	return mismatch === 0;
}

export class ProiectroTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Proiect.ro Trigger',
		name: 'proiectroTrigger',
		
		icon: 'file:proiectro.svg',
		group: ['trigger'],
		version: 1,
		usableAsTool: true,
		subtitle: '={{$parameter["eventType"]}}',
		description: 'Starts the workflow when a Proiect.ro event occurs',
		defaults: { name: 'Proiect.ro Trigger' },
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'proiectroApi', required: true }],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event Type',
				name: 'eventType',
				type: 'multiOptions',
				required: true,
				default: [],
				options: [
					{ name: 'Comment Added', value: 'addComment' },
					{ name: 'Comment Deleted', value: 'deleteComment' },
					{ name: 'Comment Updated', value: 'editComment' },
					{ name: 'Contact Created', value: 'addContact' },
					{ name: 'Contact Deleted', value: 'deleteContact' },
					{ name: 'Contact Invited to Portal', value: 'inviteContactToCustomerPortal' },
					{ name: 'Contact Updated', value: 'editContact' },
					{ name: 'Customer Asset Created', value: 'addCustomerAsset' },
					{ name: 'Customer Asset Deleted', value: 'deleteCustomerAsset' },
					{ name: 'Customer Asset Updated', value: 'editCustomerAsset' },
					{ name: 'Customer Created', value: 'addOrg' },
					{ name: 'Customer Deleted', value: 'deleteOrg' },
					{ name: 'Customer Labeled', value: 'labelOrg' },
					{ name: 'Customer Location Created', value: 'addCustomerLocation' },
					{ name: 'Customer Location Deleted', value: 'deleteCustomerLocation' },
					{ name: 'Customer Location Updated', value: 'editCustomerLocation' },
					{ name: 'Customer Portal Access Revoked', value: 'revokeCustomerPortalAccess' },
					{ name: 'Customer Tagged', value: 'tagOrg' },
					{ name: 'Customer Unlabeled', value: 'unlabelOrg' },
					{ name: 'Customer Untagged', value: 'untagOrg' },
					{ name: 'Customer Updated', value: 'editOrg' },
					{ name: 'Document Created', value: 'documentCreated' },
					{ name: 'Document Deleted', value: 'documentDeleted' },
					{ name: 'Document Finalized', value: 'documentFinalized' },
					{ name: 'Document Updated', value: 'documentEdited' },
					{ name: 'External Support Request Closed', value: 'closeExternalSupportRequest' },
					{ name: 'External Support Request Closed as No Longer Required', value: 'closeExternalSupportRequestNoLongerRequired' },
					{ name: 'External Support Request Comment Added', value: 'addExternalSupportRequestComment' },
					{ name: 'External Support Request Created', value: 'addExternalSupportRequest' },
					{ name: 'External Support Request Queue Transferred', value: 'transferExternalSupportRequestQueue' },
					{ name: 'External Support Request Reassigned', value: 'reassignExternalSupportRequest' },
					{ name: 'External Support Request Reopened', value: 'reopenExternalSupportRequest' },
					{ name: 'External Support Request Solution Accepted', value: 'acceptSolutionExternalSupportRequest' },
					{ name: 'External Support Request Solution Rejected', value: 'rejectSolutionExternalSupportRequest' },
					{ name: 'External Support Request Status Changed', value: 'changeExternalSupportRequestStatus' },
					{ name: 'External Support Request Updated', value: 'editExternalSupportRequest' },
					{ name: 'Form Submitted', value: 'formSubmitted' },
					{ name: 'Lead Claimed', value: 'claimLead' },
					{ name: 'Lead Converted', value: 'markLeadConverted' },
					{ name: 'Lead Created', value: 'addLead' },
					{ name: 'Lead Deleted', value: 'deleteLead' },
					{ name: 'Lead Disqualified', value: 'disqualifyLead' },
					{ name: 'Lead List Created', value: 'addLeadList' },
					{ name: 'Lead List Deleted', value: 'deleteLeadList' },
					{ name: 'Lead List Reassigned', value: 'reassignLeadList' },
					{ name: 'Lead List Updated', value: 'editLeadList' },
					{ name: 'Lead Marked Do Not Contact', value: 'markLeadDoNotContact' },
					{ name: 'Lead Reopened', value: 'reopenLead' },
					{ name: 'Lead Status Updated', value: 'updateLeadStatus' },
					{ name: 'Lead Updated', value: 'editLead' },
					{ name: 'Leads Imported', value: 'importLeads' },
					{ name: 'Leads Reassigned in List', value: 'reassignLeadsInList' },
					{ name: 'Location Created', value: 'addLocation' },
					{ name: 'Location Deleted', value: 'deleteLocation' },
					{ name: 'Location Updated', value: 'editLocation' },
					{ name: 'Operational Work Item Tagged', value: 'tagOperationalWorkItem' },
					{ name: 'Operational Work Item Untagged', value: 'untagOperationalWorkItem' },
					{ name: 'Partner Support Request Closed', value: 'closePartnerSupportRequest' },
					{ name: 'Partner Support Request Comment Added', value: 'addPartnerSupportRequestComment' },
					{ name: 'Partner Support Request Comment Replied', value: 'replyPartnerSupportRequestComment' },
					{ name: 'Partner Support Request Created', value: 'addPartnerSupportRequest' },
					{ name: 'Partner Support Request Reopened', value: 'reopenPartnerSupportRequest' },
					{ name: 'Partner Support Request Solution Accepted', value: 'acceptSolutionPartnerSupportRequest' },
					{ name: 'Partner Support Request Solution Rejected', value: 'rejectSolutionPartnerSupportRequest' },
					{ name: 'Payment Created', value: 'addPayment' },
					{ name: 'Payment Deleted', value: 'deletePayment' },
					{ name: 'Payment Marked Paid', value: 'markPaymentPaid' },
					{ name: 'Payment Marked Unpaid', value: 'markPaymentUnpaid' },
					{ name: 'Payment Updated', value: 'editPayment' },
					{ name: 'Project Archived', value: 'archiveProject' },
					{ name: 'Project Cancelled', value: 'cancelProject' },
					{ name: 'Project Deleted', value: 'deleteProject' },
					{ name: 'Project Delivered', value: 'markProjectDelivered' },
					{ name: 'Project Reopened', value: 'reopenProject' },
					{ name: 'Project Unarchived', value: 'unarchiveProject' },
					{ name: 'Project Updated', value: 'editProject' },
					{ name: 'Proposal Accepted', value: 'acceptProposal' },
					{ name: 'Proposal Created', value: 'addProposal' },
					{ name: 'Proposal Deleted', value: 'deleteProposal' },
					{ name: 'Proposal Labeled', value: 'labelProposal' },
					{ name: 'Proposal Reopened', value: 'reopenProposal' },
					{ name: 'Proposal Stage Changed', value: 'changeProposalStage' },
					{ name: 'Proposal Tagged', value: 'tagProposal' },
					{ name: 'Proposal Unlabeled', value: 'unlabelProposal' },
					{ name: 'Proposal Untagged', value: 'untagProposal' },
					{ name: 'Proposal Updated', value: 'editProposal' },
					{ name: 'Resource Booking Created', value: 'addResourceBooking' },
					{ name: 'Resource Booking Deleted', value: 'deleteResourceBooking' },
					{ name: 'Resource Booking Updated', value: 'editResourceBooking' },
					{ name: 'Resource Created', value: 'addResource' },
					{ name: 'Resource Deleted', value: 'deleteResource' },
					{ name: 'Resource Labeled', value: 'labelResource' },
					{ name: 'Resource Tagged', value: 'tagResource' },
					{ name: 'Resource Unlabeled', value: 'unlabelResource' },
					{ name: 'Resource Untagged', value: 'untagResource' },
					{ name: 'Resource Updated', value: 'editResource' },
					{ name: 'Sales Activity Deleted', value: 'deleteSalesActivity' },
					{ name: 'Sales Activity Logged', value: 'addSalesActivity' },
					{ name: 'Support Request Closed', value: 'closeInternalSupportRequest' },
					{ name: 'Support Request Closed as No Longer Required', value: 'closeInternalSupportRequestNoLongerRequired' },
					{ name: 'Support Request Comment Added', value: 'addInternalSupportRequestComment' },
					{ name: 'Support Request Created', value: 'addInternalSupportRequest' },
					{ name: 'Support Request Queue Transferred', value: 'transferInternalSupportRequestQueue' },
					{ name: 'Support Request Reassigned', value: 'reassignInternalSupportRequest' },
					{ name: 'Support Request Reopened', value: 'reopenInternalSupportRequest' },
					{ name: 'Support Request Solution Accepted', value: 'acceptSolutionInternalSupportRequest' },
					{ name: 'Support Request Solution Rejected', value: 'rejectSolutionInternalSupportRequest' },
					{ name: 'Support Request Status Changed', value: 'changeInternalSupportRequestStatus' },
					{ name: 'Support Request Updated', value: 'editInternalSupportRequest' },
					{ name: 'Team Booking Created', value: 'addTeamBooking' },
					{ name: 'Team Booking Deleted', value: 'deleteTeamBooking' },
					{ name: 'Team Booking Updated', value: 'editTeamBooking' },
					{ name: 'Team Invitation Accepted', value: 'acceptInvitationToTeam' },
					{ name: 'Team Invitation Declined', value: 'declineInvitationToTeam' },
					{ name: 'Team Member Invited', value: 'inviteToTeam' },
					{ name: 'Team Member Labeled', value: 'labelMember' },
					{ name: 'Team Member Removed', value: 'excludeFromTeam' },
					{ name: 'Team Member Status Toggled', value: 'toggleMemberStatus' },
					{ name: 'Team Member Tagged', value: 'tagMember' },
					{ name: 'Team Member Unlabeled', value: 'unlabelMember' },
					{ name: 'Team Member Untagged', value: 'untagMember' },
					{ name: 'Timer Created', value: 'addTimer' },
					{ name: 'Timer Deleted', value: 'deleteTimer' },
					{ name: 'Timer Updated', value: 'editTimer' },
					{ name: 'Work Item Approved', value: 'approveOperationalItem' },
					{ name: 'Work Item Created', value: 'addOperationalItem' },
					{ name: 'Work Item Created (Project)', value: 'addWorkItem' },
					{ name: 'Work Item Deleted', value: 'deleteOperationalItem' },
					{ name: 'Work Item Deleted (Project)', value: 'deleteWorkItem' },
					{ name: 'Work Item Labeled', value: 'labelWorkItem' },
					{ name: 'Work Item Moved', value: 'moveOperationalItem' },
					{ name: 'Work Item Reassigned', value: 'reassignOperationalItem' },
					{ name: 'Work Item Rejected', value: 'rejectOperationalItem' },
					{ name: 'Work Item Status Changed', value: 'updateWorkItemStatus' },
					{ name: 'Work Item Tagged (Project)', value: 'tagProjectWorkItem' },
					{ name: 'Work Item Unlabeled', value: 'unlabelWorkItem' },
					{ name: 'Work Item Untagged (Project)', value: 'untagProjectWorkItem' },
					{ name: 'Work Item Updated', value: 'editOperationalItem' },
					{ name: 'Work Item Updated (Project)', value: 'editWorkItem' },
					{ name: 'Work Log Deleted', value: 'deleteWorkLog' },
					{ name: 'Work Log Updated', value: 'editWorkLog' },
					{ name: 'Work Logged', value: 'addWorkLog' },
				],
				description: 'The event types to listen for',
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				return !!webhookData.webhookId;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const eventTypes = this.getNodeParameter('eventType') as string[];
				const credentials = await this.getCredentials('proiectroApi');

				const response = (await this.helpers.httpRequestWithAuthentication.call(this, 'proiectroApi', {
					method: 'POST',
					url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/add_webhook`,
					headers: {
						'Content-Type': 'application/json',
					},
					body: {
						name: `n8n: ${this.getWorkflow().name}`,
						target_url: webhookUrl,
						event_types: eventTypes,
						is_active: true,
						is_secure: true,
					},
				})) as { webhook_id: string; secret_key: string };

				const webhookData = this.getWorkflowStaticData('node');
				webhookData.webhookId = response.webhook_id;
				webhookData.secretKey = response.secret_key;
				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const credentials = await this.getCredentials('proiectroApi');

				if (webhookData.webhookId) {
					try {
						await this.helpers.httpRequestWithAuthentication.call(this, 'proiectroApi', {
							method: 'DELETE',
							url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/delete_webhook/${webhookData.webhookId}`,
						});
					} catch (error) {
						this.logger.warn(
							`Proiect.ro trigger: could not delete webhook ${webhookData.webhookId}: ${(error as Error).message}`,
						);
					}
				}
				delete webhookData.webhookId;
				delete webhookData.secretKey;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const webhookData = this.getWorkflowStaticData('node');
		const secret = webhookData.secretKey as string | undefined;

		if (secret) {
			const signature = this.getHeaderData()[SIGNATURE_HEADER] as string | undefined;
			if (!signature) {
				return { webhookResponse: 'Missing signature', workflowData: undefined };
			}
			// Use the raw body for signature verification
			const rawBody = typeof req.rawBody === 'string'
				? req.rawBody
				: (req.rawBody as Buffer).toString('utf-8');
			if (!verifySignature(secret, signature, rawBody)) {
				return { webhookResponse: 'Invalid signature', workflowData: undefined };
			}
		}

		const bodyData = this.getBodyData();
		return {
			workflowData: [this.helpers.returnJsonArray(bodyData)],
		};
	}
}
