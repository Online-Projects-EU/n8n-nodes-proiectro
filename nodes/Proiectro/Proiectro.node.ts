import type {
	IDataObject,
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

import {
	assetCategoryFields,
	assetCategoryOperations,
} from './descriptions/AssetCategoryDescription';
import {
	commentFields,
	commentOperations,
} from './descriptions/CommentDescription';
import {
	contactFields,
	contactOperations,
} from './descriptions/ContactDescription';
import {
	customFormFields,
	customFormOperations,
} from './descriptions/CustomFormDescription';
import {
	customerFields,
	customerOperations,
} from './descriptions/CustomerDescription';
import {
	customerAssetFields,
	customerAssetOperations,
} from './descriptions/CustomerAssetDescription';
import {
	customerLocationFields,
	customerLocationOperations,
} from './descriptions/CustomerLocationDescription';
import {
	documentFields,
	documentOperations,
} from './descriptions/DocumentDescription';
import {
	kpiFields,
	kpiOperations,
} from './descriptions/KpiDescription';
import {
	labelFields,
	labelOperations,
} from './descriptions/LabelDescription';
import {
	leadFields,
	leadOperations,
} from './descriptions/LeadDescription';
import {
	leadListFields,
	leadListOperations,
} from './descriptions/LeadListDescription';
import {
	locationFields,
	locationOperations,
} from './descriptions/LocationDescription';
import {
	operationalWorkItemFields,
	operationalWorkItemOperations,
} from './descriptions/OperationalWorkItemDescription';
import {
	paymentFields,
	paymentOperations,
} from './descriptions/PaymentDescription';
import {
	processDefinitionFields,
	processDefinitionOperations,
} from './descriptions/ProcessDefinitionDescription';
import {
	projectFields,
	projectOperations,
} from './descriptions/ProjectDescription';
import {
	proposalFields,
	proposalOperations,
} from './descriptions/ProposalDescription';
import {
	resourceFields,
	resourceOperations,
} from './descriptions/ResourceDescription';
import {
	supportRequestFields,
	supportRequestOperations,
} from './descriptions/SupportRequestDescription';
import {
	tagFields,
	tagOperations,
} from './descriptions/TagDescription';
import {
	teamMemberFields,
	teamMemberOperations,
} from './descriptions/TeamMemberDescription';
import {
	timerFields,
	timerOperations,
} from './descriptions/TimerDescription';
import {
	workItemFields,
	workItemOperations,
} from './descriptions/WorkItemDescription';


export class Proiectro implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Proiect.ro',
		name: 'proiectro',
		
		icon: 'file:proiectro.svg',
		group: ['transform'],
		version: 1,
		usableAsTool: true,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Automate your business workflows with Proiectro',
		defaults: {
			name: 'Proiect.ro',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'proiectroApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Asset Category',
						value: 'assetCategory',
						description: 'Look up asset categories',
					},
					{
						name: 'Comment',
						value: 'comment',
						description: 'Comments on work items and operational work items',
					},
					{
						name: 'Contact',
						value: 'contact',
						description: 'Manage contacts within organizations',
					},
					{
						name: 'Custom Form',
						value: 'customForm',
						description: 'Submit custom forms and work with their submissions',
					},
					{
						name: 'Customer',
						value: 'customer',
						description: 'Manage customers (organizations)',
					},
					{
						name: 'Customer Asset',
						value: 'customerAsset',
						description: 'Manage customer assets (equipment, devices, etc.)',
					},
					{
						name: 'Customer Location',
						value: 'customerLocation',
						description: 'Manage customer locations (link customers to locations)',
					},
					{
						name: 'Document',
						value: 'document',
						description: 'Generate numbered documents from templates',
					},
					{
						name: 'KPI',
						value: 'kpi',
						description: 'Workspace health indicators for digests and alerts',
					},
					{
						name: 'Label',
						value: 'label',
						description: 'Create labels (key-value pairs) and attach them to entities',
					},
					{
						name: 'Lead',
						value: 'lead',
						description: 'Capture leads and move them through the pipeline',
					},
					{
						name: 'Lead List',
						value: 'leadList',
						description: 'Lists that group leads for a campaign or an owner',
					},
					{
						name: 'Location',
						value: 'location',
						description: 'Manage workspace locations',
					},
					{
						name: 'Operational Work Item',
						value: 'operationalWorkItem',
						description: 'Items that flow through business processes',
					},
					{
						name: 'Payment',
						value: 'payment',
						description: 'Manage payment records',
					},
					{
						name: 'Process Definition',
						value: 'processDefinition',
						description: 'Look up operational process definitions',
					},
					{
						name: 'Project',
						value: 'project',
						description: 'Manage projects',
					},
					{
						name: 'Proposal',
						value: 'proposal',
						description: 'Manage proposals and quotes',
					},
					{
						name: 'Resource',
						value: 'resource',
						description: 'Manage resources (people, equipment, facilities)',
					},
					{
						name: 'Support Request',
						value: 'supportRequest',
						description: 'Manage internal support requests',
					},
					{
						name: 'Tag',
						value: 'tag',
						description: 'Create tags and attach them to entities',
					},
					{
						name: 'Team Member',
						value: 'teamMember',
						description: 'Manage team members in the workspace',
					},
					{
						name: 'Timer',
						value: 'timer',
						description: 'Scheduled timers that fire automation events',
					},
					{
						name: 'Work Item',
						value: 'workItem',
						description: 'Manage project work items (tasks/deliverables)',
					},
				],
				default: 'assetCategory',
			},
			...assetCategoryOperations,
			...assetCategoryFields,
			...commentOperations,
			...commentFields,
			...contactOperations,
			...contactFields,
			...customFormOperations,
			...customFormFields,
			...customerOperations,
			...customerFields,
			...customerAssetOperations,
			...customerAssetFields,
			...customerLocationOperations,
			...customerLocationFields,
			...documentOperations,
			...documentFields,
			...kpiOperations,
			...kpiFields,
			...labelOperations,
			...labelFields,
			...leadOperations,
			...leadFields,
			...leadListOperations,
			...leadListFields,
			...locationOperations,
			...locationFields,
			...operationalWorkItemOperations,
			...operationalWorkItemFields,
			...paymentOperations,
			...paymentFields,
			...processDefinitionOperations,
			...processDefinitionFields,
			...projectOperations,
			...projectFields,
			...proposalOperations,
			...proposalFields,
			...resourceOperations,
			...resourceFields,
			...supportRequestOperations,
			...supportRequestFields,
			...tagOperations,
			...tagFields,
			...teamMemberOperations,
			...teamMemberFields,
			...timerOperations,
			...timerFields,
			...workItemOperations,
			...workItemFields,
		],
	};

	methods = {
		loadOptions: {
			async getCustomers(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/tenant_orgs`,
						json: true,
					},
				)) as { orgs: Array<Record<string, unknown>> };
				return (response.orgs ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getMembers(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/team`,
						json: true,
					},
				)) as { members: Array<Record<string, unknown>> };
				return (response.members ?? []).map((item) => ({
					name: (item.first_name as string) + ' ' + (item.last_name as string),
					value: item.id as string,
				}));
			},
			async getTags(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/tags`,
						json: true,
					},
				)) as { tags: Array<Record<string, unknown>> };
				return (response.tags ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getProjects(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/projects`,
						json: true,
					},
				)) as { projects: Array<Record<string, unknown>> };
				return (response.projects ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getProposals(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/active_proposals`,
						json: true,
					},
				)) as { proposals: Array<Record<string, unknown>> };
				return (response.proposals ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getProcesses(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/process_definitions`,
						json: true,
					},
				)) as { processes: Array<Record<string, unknown>> };
				return (response.processes ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getWorkItemTypes(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/list_work_item_types`,
						json: true,
					},
				)) as { work_item_types: Array<Record<string, unknown>> };
				return (response.work_item_types ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getLabels(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/labels`,
						json: true,
					},
				)) as { labels: Array<Record<string, unknown>> };
				return (response.labels ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getAssetCategories(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/list_asset_categories`,
						json: true,
					},
				)) as { asset_categories: Array<Record<string, unknown>> };
				return (response.asset_categories ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getDocumentTemplates(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/document_templates_list`,
						json: true,
					},
				)) as { document_templates: Array<Record<string, unknown>> };
				return (response.document_templates ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
			async getCustomForms(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const credentials = await this.getCredentials('proiectroApi');
				const response = (await this.helpers.httpRequestWithAuthentication.call(
					this,
					'proiectroApi',
					{
						method: 'GET',
						url: `${credentials.baseUrl}/api/v1/${credentials.workspacePath}/custom_forms`,
						json: true,
					},
				)) as { custom_forms: Array<Record<string, unknown>> };
				return (response.custom_forms ?? []).map((item) => ({
					name: (item.name as string),
					value: item.id as string,
				}));
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const credentials = await this.getCredentials('proiectroApi');
		const baseUrl = credentials.baseUrl as string;
		const workspacePath = credentials.workspacePath as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: IDataObject;

				const apiBase = `${baseUrl}/api/v1/${workspacePath}`;


				if (resource === 'operationalWorkItem' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/tasks`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'get') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/task/${item_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'create') {
					const body: IDataObject = {};
					body['process'] = this.getNodeParameter('process', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/task`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'update') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/task/${item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'delete') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/task/${item_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'move') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					const body: IDataObject = {};
					body['target_stage'] = this.getNodeParameter('target_stage', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/move_task/${item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'approve') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					const body: IDataObject = {};
					body['target_stage'] = this.getNodeParameter('target_stage', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/approve_task/${item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'reject') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					const body: IDataObject = {};
					body['reason'] = this.getNodeParameter('reason', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/reject_task/${item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'reassign') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					const body: IDataObject = {};
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/reassign_task/${item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'my_items') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/my_tasks`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'my_approvals') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/my_approvals`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'stage_items') {
					const process_id = this.getNodeParameter('process_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/process_stage_tasks/${process_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'operationalWorkItem' && operation === 'history') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/task_history/${item_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customer' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/tenant_orgs`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customer' && operation === 'get') {
					const subtenant_id = this.getNodeParameter('subtenant_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/org_details/${subtenant_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customer' && operation === 'create') {
					const body: IDataObject = {};
					body['parent_id'] = this.getNodeParameter('parent_id', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['timezone'] = this.getNodeParameter('timezone', i) as string | number | boolean;
					body['default_currency'] = this.getNodeParameter('default_currency', i) as string | number | boolean;
					body['country'] = this.getNodeParameter('country', i) as string | number | boolean;
					body['manager'] = this.getNodeParameter('manager', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_org`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customer' && operation === 'update') {
					const subtenant_id = this.getNodeParameter('subtenant_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['timezone'] = this.getNodeParameter('timezone', i) as string | number | boolean;
					body['default_currency'] = this.getNodeParameter('default_currency', i) as string | number | boolean;
					body['country'] = this.getNodeParameter('country', i) as string | number | boolean;
					body['manager'] = this.getNodeParameter('manager', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_org/${subtenant_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customer' && operation === 'delete') {
					const subtenant_id = this.getNodeParameter('subtenant_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_org/${subtenant_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customer' && operation === 'enrich') {
					const cui = this.getNodeParameter('cui', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/enrich_company/${cui}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'contact' && operation === 'list') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/contacts/${org_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'contact' && operation === 'create') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const body: IDataObject = {};
					body['contact_info_first_name'] = this.getNodeParameter('contact_info_first_name', i) as string | number | boolean;
					body['contact_info_last_name'] = this.getNodeParameter('contact_info_last_name', i) as string | number | boolean;
					body['contact_info_email'] = this.getNodeParameter('contact_info_email', i) as string | number | boolean;
					body['contact_info_phone'] = this.getNodeParameter('contact_info_phone', i) as string | number | boolean;
					body['contact_info_address'] = this.getNodeParameter('contact_info_address', i) as string | number | boolean;
					body['contact_info_job_title'] = this.getNodeParameter('contact_info_job_title', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_contact/${org_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'contact' && operation === 'update') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const contact_id = this.getNodeParameter('contact_id', i) as string;
					const body: IDataObject = {};
					body['contact_info_phone'] = this.getNodeParameter('contact_info_phone', i) as string | number | boolean;
					body['contact_info_address'] = this.getNodeParameter('contact_info_address', i) as string | number | boolean;
					body['contact_info_job_title'] = this.getNodeParameter('contact_info_job_title', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/edit_contact/${org_id}/${contact_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'contact' && operation === 'delete') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const contact_id = this.getNodeParameter('contact_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_contact/${org_id}/${contact_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'contact' && operation === 'invite') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const contact_id = this.getNodeParameter('contact_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/invite_contact/${org_id}/${contact_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'list') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/org_proposals/${org_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'get') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/proposal/${proposal_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					body['customer'] = this.getNodeParameter('customer', i) as string | number | boolean;
					body['owner'] = this.getNodeParameter('owner', i) as string | number | boolean;
					body['manager'] = this.getNodeParameter('manager', i) as string | number | boolean;
					body['sales_stage'] = this.getNodeParameter('sales_stage', i) as string | number | boolean;
					body['proposal_currency'] = this.getNodeParameter('proposal_currency', i) as string | number | boolean;
					body['wbsconfiguration'] = this.getNodeParameter('wbsconfiguration', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_proposal`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'update') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					body['customer'] = this.getNodeParameter('customer', i) as string | number | boolean;
					body['owner'] = this.getNodeParameter('owner', i) as string | number | boolean;
					body['proposal_currency'] = this.getNodeParameter('proposal_currency', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_proposal/${proposal_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'change_stage') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const stage_id = this.getNodeParameter('stage_id', i) as string;
					const body: IDataObject = {};
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/change_proposal_stage/${proposal_id}/${stage_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'reopen') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/reopen_proposal/${proposal_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'list_active') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/active_proposals`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'delete') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_proposal/${proposal_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'proposal' && operation === 'log_activity') {
					const body: IDataObject = {};
					body['activity_type'] = this.getNodeParameter('activity_type', i) as string | number | boolean;
					body['note'] = this.getNodeParameter('note', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_sales_activity`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/projects`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'get_work_items') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/project_work_items/${project_id}`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'list_by_customer') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/org_projects/${org_id}`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'update') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					body['manager'] = this.getNodeParameter('manager', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_project/${project_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'delete') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_project/${project_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'archive') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/archive_project/${project_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'unarchive') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/unarchive_project/${project_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'mark_delivered') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/mark_project_delivered/${project_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'cancel') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const body: IDataObject = {};
					body['cancellation_reason'] = this.getNodeParameter('cancellation_reason', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/cancel_project/${project_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'reopen') {
					const project_id = this.getNodeParameter('project_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/reopen_project/${project_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'project' && operation === 'log_work') {
					const body: IDataObject = {};
					body['work_item'] = this.getNodeParameter('work_item', i) as string | number | boolean;
					body['project'] = this.getNodeParameter('project', i) as string | number | boolean;
					body['member'] = this.getNodeParameter('member', i) as string | number | boolean;
					body['hours'] = this.getNodeParameter('hours', i) as string | number | boolean;
					body['date'] = this.getNodeParameter('date', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_work_log`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'workItem' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['project_id'] = this.getNodeParameter('project_id', i) as string | number | boolean;
					body['work_item_type_id'] = this.getNodeParameter('work_item_type_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_work_item`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'workItem' && operation === 'update') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['parent'] = this.getNodeParameter('parent', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_project_work_item/${work_item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'workItem' && operation === 'change_status') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const body: IDataObject = {};
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/update_work_item_status/${work_item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'workItem' && operation === 'delete') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const qs: IDataObject = {};
					{
						const value = this.getNodeParameter('delete_descendants', i, undefined);
						if (value !== undefined && value !== '') qs['delete_descendants'] = value as string | number | boolean;
					}
					{
						const value = this.getNodeParameter('reparent_id', i, undefined);
						if (value !== undefined && value !== '') qs['reparent_id'] = value as string | number | boolean;
					}
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_work_item/${work_item_id}`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'workItem' && operation === 'get') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/project_work_item_detail/${work_item_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'payment' && operation === 'create') {
					const body: IDataObject = {};
					body['payment_schedule_block_id'] = this.getNodeParameter('payment_schedule_block_id', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['due_date'] = this.getNodeParameter('due_date', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/payment`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'payment' && operation === 'update') {
					const payment_id = this.getNodeParameter('payment_id', i) as string;
					const body: IDataObject = {};
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/payment/${payment_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'payment' && operation === 'mark_paid') {
					const payment_id = this.getNodeParameter('payment_id', i) as string;
					const body: IDataObject = {};
					body['paid_date'] = this.getNodeParameter('paid_date', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/payment/${payment_id}/mark_paid`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'payment' && operation === 'mark_unpaid') {
					const payment_id = this.getNodeParameter('payment_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/payment/${payment_id}/mark_unpaid`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'payment' && operation === 'delete') {
					const payment_id = this.getNodeParameter('payment_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/payment/${payment_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/internal_support_requests`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'get') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/internal_support_request/${support_request_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'create') {
					const body: IDataObject = {};
					body['request_type'] = this.getNodeParameter('request_type', i) as string | number | boolean;
					body['request_severity'] = this.getNodeParameter('request_severity', i) as string | number | boolean;
					body['title'] = this.getNodeParameter('title', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/internal_support_request`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'edit') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					body['title'] = this.getNodeParameter('title', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					body['request_type'] = this.getNodeParameter('request_type', i) as string | number | boolean;
					body['request_severity'] = this.getNodeParameter('request_severity', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/internal_support_request/${support_request_id}/edit`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'close') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					body['status_id'] = this.getNodeParameter('status_id', i) as string | number | boolean;
					body['resolution'] = this.getNodeParameter('resolution', i) as string | number | boolean;
					body['reason'] = this.getNodeParameter('reason', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/internal_support_request/${support_request_id}/close`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'reopen') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/internal_support_request/${support_request_id}/reopen`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'change_status') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					body['status_id'] = this.getNodeParameter('status_id', i) as string | number | boolean;
					body['reason'] = this.getNodeParameter('reason', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/internal_support_request/${support_request_id}/change_status`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'reassign') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					body['assignee_id'] = this.getNodeParameter('assignee_id', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/internal_support_request/${support_request_id}/reassign`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'add_comment') {
					const body: IDataObject = {};
					body['support_request_id'] = this.getNodeParameter('support_request_id', i) as string | number | boolean;
					body['content'] = this.getNodeParameter('content', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_internal_support_request_comment`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'supportRequest' && operation === 'my_assigned') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/assigned_internal_support_requests`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'teamMember' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/team`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'teamMember' && operation === 'invite') {
					const body: IDataObject = {};
					body['email'] = this.getNodeParameter('email', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/invite_to_team`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'teamMember' && operation === 'edit') {
					const member_id = this.getNodeParameter('member_id', i) as string;
					const body: IDataObject = {};
					body['nickname'] = this.getNodeParameter('nickname', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_member/${member_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'teamMember' && operation === 'remove') {
					const team_id = this.getNodeParameter('team_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/exclude_from_team/${team_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/tags`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['color'] = this.getNodeParameter('color', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_tag`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_customer') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_org/${org_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_customer') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_org/${org_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_member') {
					const member_id = this.getNodeParameter('member_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_member/${member_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_member') {
					const member_id = this.getNodeParameter('member_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_member/${member_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_resource') {
					const resource_id = this.getNodeParameter('resource_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_resource/${resource_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_resource') {
					const resource_id = this.getNodeParameter('resource_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_resource/${resource_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_proposal') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_proposal/${proposal_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_proposal') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_proposal/${proposal_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_work_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_project_work_item/${work_item_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_work_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_project_work_item/${work_item_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_operational_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_operational_work_item/${work_item_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_operational_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_operational_work_item/${work_item_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_document') {
					const document_id = this.getNodeParameter('document_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_document/${document_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_document') {
					const document_id = this.getNodeParameter('document_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_document/${document_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'tag_lead') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					const body: IDataObject = {};
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/tag_lead/${lead_id}/${tag_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'tag' && operation === 'untag_lead') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const tag_id = this.getNodeParameter('tag_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/untag_lead/${lead_id}/${tag_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/labels`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_label`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_customer') {
					const body: IDataObject = {};
					body['org'] = this.getNodeParameter('org', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_org`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_customer') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_org/${org_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_member') {
					const body: IDataObject = {};
					body['team'] = this.getNodeParameter('team', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_member`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_member') {
					const member_id = this.getNodeParameter('member_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_member/${member_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_resource') {
					const body: IDataObject = {};
					body['resource'] = this.getNodeParameter('resource', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_resource`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_resource') {
					const resource_id = this.getNodeParameter('resource_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_resource/${resource_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_proposal') {
					const body: IDataObject = {};
					body['proposal'] = this.getNodeParameter('proposal', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_proposal`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_proposal') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_proposal/${proposal_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_work_item') {
					const body: IDataObject = {};
					body['work_item'] = this.getNodeParameter('work_item', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_project_work_item`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_work_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_project_work_item/${work_item_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_operational_item') {
					const body: IDataObject = {};
					body['operational_work_item'] = this.getNodeParameter('operational_work_item', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_operational_work_item`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_operational_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_operational_work_item/${work_item_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_document') {
					const body: IDataObject = {};
					body['document'] = this.getNodeParameter('document', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_document`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_document') {
					const document_id = this.getNodeParameter('document_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_document/${document_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'label_lead') {
					const body: IDataObject = {};
					body['lead'] = this.getNodeParameter('lead', i) as string | number | boolean;
					body['label'] = this.getNodeParameter('label', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/label_lead`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'label' && operation === 'unlabel_lead') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const label_id = this.getNodeParameter('label_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/unlabel_lead/${lead_id}/${label_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'resource' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/resource_types`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'resource' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					body['timezone'] = this.getNodeParameter('timezone', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_resource`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'resource' && operation === 'update') {
					const resource_id = this.getNodeParameter('resource_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['description'] = this.getNodeParameter('description', i) as string | number | boolean;
					body['timezone'] = this.getNodeParameter('timezone', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_resource/${resource_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'resource' && operation === 'delete') {
					const resource_id = this.getNodeParameter('resource_id', i) as string;
					const qs: IDataObject = {};
					{
						const value = this.getNodeParameter('delete_descendants', i, undefined);
						if (value !== undefined && value !== '') qs['delete_descendants'] = value as string | number | boolean;
					}
					{
						const value = this.getNodeParameter('reparent_id', i, undefined);
						if (value !== undefined && value !== '') qs['reparent_id'] = value as string | number | boolean;
					}
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_resource/${resource_id}`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'processDefinition' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/process_definitions`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'processDefinition' && operation === 'get') {
					const process_id = this.getNodeParameter('process_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/process_definition/${process_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'location' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/locations`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'location' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_location`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'location' && operation === 'update') {
					const location_id = this.getNodeParameter('location_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_location/${location_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'location' && operation === 'delete') {
					const location_id = this.getNodeParameter('location_id', i) as string;
					const qs: IDataObject = {};
					{
						const value = this.getNodeParameter('delete_descendants', i, undefined);
						if (value !== undefined && value !== '') qs['delete_descendants'] = value as string | number | boolean;
					}
					{
						const value = this.getNodeParameter('reparent_id', i, undefined);
						if (value !== undefined && value !== '') qs['reparent_id'] = value as string | number | boolean;
					}
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_location/${location_id}`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerLocation' && operation === 'list') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/list_customer_locations/${org_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerLocation' && operation === 'create') {
					const body: IDataObject = {};
					body['customer'] = this.getNodeParameter('customer', i) as string | number | boolean;
					body['location'] = this.getNodeParameter('location', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_customer_location`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerLocation' && operation === 'update') {
					const customer_location_id = this.getNodeParameter('customer_location_id', i) as string;
					const body: IDataObject = {};
					body['location'] = this.getNodeParameter('location', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_customer_location/${customer_location_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerLocation' && operation === 'delete') {
					const customer_location_id = this.getNodeParameter('customer_location_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_customer_location/${customer_location_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerAsset' && operation === 'list') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/list_customer_assets/${org_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerAsset' && operation === 'create') {
					const body: IDataObject = {};
					body['customer'] = this.getNodeParameter('customer', i) as string | number | boolean;
					body['category'] = this.getNodeParameter('category', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_customer_asset`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerAsset' && operation === 'update') {
					const asset_id = this.getNodeParameter('asset_id', i) as string;
					const body: IDataObject = {};
					body['category'] = this.getNodeParameter('category', i) as string | number | boolean;
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_customer_asset/${asset_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customerAsset' && operation === 'delete') {
					const asset_id = this.getNodeParameter('asset_id', i) as string;
					const qs: IDataObject = {};
					{
						const value = this.getNodeParameter('delete_descendants', i, undefined);
						if (value !== undefined && value !== '') qs['delete_descendants'] = value as string | number | boolean;
					}
					{
						const value = this.getNodeParameter('reparent_id', i, undefined);
						if (value !== undefined && value !== '') qs['reparent_id'] = value as string | number | boolean;
					}
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_customer_asset/${asset_id}`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'assetCategory' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/list_asset_categories`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'list_work_item') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const page_number = this.getNodeParameter('page_number', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/work_item_comments/${work_item_id}/${page_number}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'add_work_item') {
					const body: IDataObject = {};
					body['work_item_id'] = this.getNodeParameter('work_item_id', i) as string | number | boolean;
					body['content'] = this.getNodeParameter('content', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/work_item_comment`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'edit_work_item') {
					const comment_id = this.getNodeParameter('comment_id', i) as string;
					const body: IDataObject = {};
					body['content'] = this.getNodeParameter('content', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_work_item_comment/${comment_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'delete_work_item') {
					const comment_id = this.getNodeParameter('comment_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_work_item_comment/${comment_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'list_operational') {
					const item_id = this.getNodeParameter('item_id', i) as string;
					const page_number = this.getNodeParameter('page_number', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/operational_work_item_comments/${item_id}/${page_number}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'add_operational') {
					const body: IDataObject = {};
					body['operational_work_item_id'] = this.getNodeParameter('operational_work_item_id', i) as string | number | boolean;
					body['content'] = this.getNodeParameter('content', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/operational_work_item_comment`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'edit_operational') {
					const comment_id = this.getNodeParameter('comment_id', i) as string;
					const body: IDataObject = {};
					body['content'] = this.getNodeParameter('content', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_operational_work_item_comment/${comment_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'comment' && operation === 'delete_operational') {
					const comment_id = this.getNodeParameter('comment_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_operational_work_item_comment/${comment_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/all_leads`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'get') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/lead/${lead_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_lead`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'update') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PUT',
							url: `${apiBase}/edit_lead/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'delete') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_lead/${lead_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'update_status') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['status'] = this.getNodeParameter('status', i) as string | number | boolean;
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/update_lead_status/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'claim') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/claim_lead/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'disqualify') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/disqualify_lead/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'reopen') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/reopen_lead/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'reschedule') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/reschedule_lead/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'convert') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/mark_lead_converted/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'do_not_contact') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/mark_lead_do_not_contact/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'log_activity') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const body: IDataObject = {};
					body['activity_type'] = this.getNodeParameter('activity_type', i) as string | number | boolean;
					body['note'] = this.getNodeParameter('note', i) as string | number | boolean;
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/log_lead_activity/${lead_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'lead' && operation === 'list_activities') {
					const lead_id = this.getNodeParameter('lead_id', i) as string;
					const page_number = this.getNodeParameter('page_number', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/lead/${lead_id}/activities/${page_number}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/lead_lists`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'get') {
					const lead_list_id = this.getNodeParameter('lead_list_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/lead_list/${lead_list_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/add_lead_list`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'update') {
					const lead_list_id = this.getNodeParameter('lead_list_id', i) as string;
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PUT',
							url: `${apiBase}/edit_lead_list/${lead_list_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'delete') {
					const lead_list_id = this.getNodeParameter('lead_list_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_lead_list/${lead_list_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'reassign') {
					const lead_list_id = this.getNodeParameter('lead_list_id', i) as string;
					const body: IDataObject = {};
					body['updated_at'] = this.getNodeParameter('updated_at', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/reassign_lead_list/${lead_list_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'leadList' && operation === 'reassign_leads') {
					const lead_list_id = this.getNodeParameter('lead_list_id', i) as string;
					const body: IDataObject = {};
					body['to_owner'] = this.getNodeParameter('to_owner', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/reassign_leads_in_list/${lead_list_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'list') {
					const qs: IDataObject = {};
					Object.assign(qs, this.getNodeParameter('filters', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/documents_list`,
							qs,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_proposal') {
					const proposal_id = this.getNodeParameter('proposal_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_proposal_document/${proposal_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_customer') {
					const org_id = this.getNodeParameter('org_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_org_document/${org_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_operational') {
					const work_item_id = this.getNodeParameter('work_item_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_operational_work_item_document/${work_item_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_support') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_internal_support_request_document/${support_request_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_external_support') {
					const support_request_id = this.getNodeParameter('support_request_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_external_support_request_document/${support_request_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_location') {
					const location_id = this.getNodeParameter('location_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_location_document/${location_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_asset') {
					const asset_id = this.getNodeParameter('asset_id', i) as string;
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_customer_asset_document/${asset_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'generate_general') {
					const body: IDataObject = {};
					body['template_id'] = this.getNodeParameter('template_id', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/generate_general_document`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'finalize') {
					const document_id = this.getNodeParameter('document_id', i) as string;
					const body: IDataObject = {};
					body['series_id'] = this.getNodeParameter('series_id', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/finalize_document/${document_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'update') {
					const document_id = this.getNodeParameter('document_id', i) as string;
					const body: IDataObject = {};
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/edit_document/${document_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'document' && operation === 'delete') {
					const document_id = this.getNodeParameter('document_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/delete_document/${document_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'timer' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/timers`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'timer' && operation === 'create') {
					const body: IDataObject = {};
					body['name'] = this.getNodeParameter('name', i) as string | number | boolean;
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/timer`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'timer' && operation === 'update') {
					const timer_id = this.getNodeParameter('timer_id', i) as string;
					const body: IDataObject = {};
					Object.assign(body, this.getNodeParameter('additionalFields', i, {}) as IDataObject);
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'PATCH',
							url: `${apiBase}/timer/${timer_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'timer' && operation === 'delete') {
					const timer_id = this.getNodeParameter('timer_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'DELETE',
							url: `${apiBase}/timer/${timer_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customForm' && operation === 'list') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/custom_forms`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customForm' && operation === 'get') {
					const form_id = this.getNodeParameter('form_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/custom_form/${form_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customForm' && operation === 'submit') {
					const form_id = this.getNodeParameter('form_id', i) as string;
					const body: IDataObject = {};
					body['data'] = this.getNodeParameter('data', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/submit_form/${form_id}`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customForm' && operation === 'list_submissions') {
					const form_id = this.getNodeParameter('form_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/form_submissions/${form_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customForm' && operation === 'get_submission') {
					const submission_id = this.getNodeParameter('submission_id', i) as string;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/form_submission_detail/${submission_id}`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'customForm' && operation === 'update_submission_status') {
					const body: IDataObject = {};
					body['submission_id'] = this.getNodeParameter('submission_id', i) as string | number | boolean;
					body['status'] = this.getNodeParameter('status', i) as string | number | boolean;
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'POST',
							url: `${apiBase}/edit_submission_status`,
							body,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'blocked_deliverables') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/blocked_deliverables`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'expiring_api_keys') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/expiring_api_keys`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'expiring_proposals') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/expiring_proposals`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'expiring_warranties') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/expiring_warranties`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'inactive_partnerships') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/inactive_partnerships`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'lead_pipeline_health') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/lead_pipeline_health`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'open_external_tickets') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/open_external_tickets`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'open_tickets') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/open_tickets`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'overdue_operational_items') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/overdue_operational_items`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'overdue_payments') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/overdue_payments`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'process_bottlenecks') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/process_bottlenecks`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'projects_at_risk') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/projects_at_risk`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'proposals_without_activity') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/proposals_without_activity`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'queue_health') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/queue_health`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'revenue_at_risk') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/revenue_at_risk`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'stale_operational_items') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/stale_operational_items`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'stale_proposals') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/stale_proposals`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'team_workload') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/team_workload`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'unassigned_items') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/unassigned_items`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'upcoming_payments') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/upcoming_payments`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'won_without_project_start') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/won_without_project_start`,
							json: true,
						},
					)) as IDataObject;

				} else if (resource === 'kpi' && operation === 'work_items_due') {
					responseData = (await this.helpers.httpRequestWithAuthentication.call(
						this,
						'proiectroApi',
						{
							method: 'GET',
							url: `${apiBase}/kpi/work_items_due`,
							json: true,
						},
					)) as IDataObject;

				} else {
					throw new NodeOperationError(
						this.getNode(),
						`Unknown resource/operation: ${resource}/${operation}`,
					);
				}

				returnData.push({ json: responseData, pairedItem: { item: i } });
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: i },
					});
					continue;
				}
				throw new NodeApiError(this.getNode(), error as JsonObject);
			}
		}

		return [returnData];
	}
}
