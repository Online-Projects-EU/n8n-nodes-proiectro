import type { INodeProperties } from 'n8n-workflow';

export const tagOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['tag'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a tag',
				description: 'Create a new tag',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all tags',
				description: 'List all tags in the workspace',
			},
			{
				name: 'Tag Customer',
				value: 'tag_customer',
				action: 'Tag a customer',
				description: 'Attach a tag to a customer',
			},
			{
				name: 'Tag Document',
				value: 'tag_document',
				action: 'Tag a document',
				description: 'Attach a tag to a document',
			},
			{
				name: 'Tag Lead',
				value: 'tag_lead',
				action: 'Tag a lead',
				description: 'Attach a tag to a lead',
			},
			{
				name: 'Tag Member',
				value: 'tag_member',
				action: 'Tag a team member',
				description: 'Attach a tag to a team member',
			},
			{
				name: 'Tag Operational Work Item',
				value: 'tag_operational_item',
				action: 'Tag an operational work item',
				description: 'Attach a tag to an operational work item',
			},
			{
				name: 'Tag Proposal',
				value: 'tag_proposal',
				action: 'Tag a proposal',
				description: 'Attach a tag to a proposal',
			},
			{
				name: 'Tag Resource',
				value: 'tag_resource',
				action: 'Tag a resource',
				description: 'Attach a tag to a resource',
			},
			{
				name: 'Tag Work Item',
				value: 'tag_work_item',
				action: 'Tag a work item',
				description: 'Attach a tag to a project work item',
			},
			{
				name: 'Untag Customer',
				value: 'untag_customer',
				action: 'Untag a customer',
				description: 'Remove a tag from a customer',
			},
			{
				name: 'Untag Document',
				value: 'untag_document',
				action: 'Untag a document',
				description: 'Remove a tag from a document',
			},
			{
				name: 'Untag Lead',
				value: 'untag_lead',
				action: 'Untag a lead',
				description: 'Remove a tag from a lead',
			},
			{
				name: 'Untag Member',
				value: 'untag_member',
				action: 'Untag a team member',
				description: 'Remove a tag from a team member',
			},
			{
				name: 'Untag Operational Work Item',
				value: 'untag_operational_item',
				action: 'Untag an operational work item',
				description: 'Remove a tag from an operational work item',
			},
			{
				name: 'Untag Proposal',
				value: 'untag_proposal',
				action: 'Untag a proposal',
				description: 'Remove a tag from a proposal',
			},
			{
				name: 'Untag Resource',
				value: 'untag_resource',
				action: 'Untag a resource',
				description: 'Remove a tag from a resource',
			},
			{
				name: 'Untag Work Item',
				value: 'untag_work_item',
				action: 'Untag a work item',
				description: 'Remove a tag from a project work item',
			},
		],
		default: 'create',
	},
];

export const tagFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Color',
		name: 'color',
		type: 'color',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Org Name or ID',
		name: 'org_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_customer", "untag_customer"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Tag Name or ID',
		name: 'tag_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getTags',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_customer", "untag_customer", "tag_member", "untag_member", "tag_resource", "untag_resource", "tag_proposal", "untag_proposal", "tag_work_item", "untag_work_item", "tag_operational_item", "untag_operational_item", "tag_document", "untag_document", "tag_lead", "untag_lead"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Member Name or ID',
		name: 'member_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getMembers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_member", "untag_member"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Resource ID',
		name: 'resource_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_resource", "untag_resource"],
			},
		},
	},
	{
		displayName: 'Proposal Name or ID',
		name: 'proposal_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getProposals',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_proposal", "untag_proposal"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Work Item ID',
		name: 'work_item_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_work_item", "untag_work_item", "tag_operational_item", "untag_operational_item"],
			},
		},
	},
	{
		displayName: 'Document ID',
		name: 'document_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_document", "untag_document"],
			},
		},
	},
	{
		displayName: 'Lead ID',
		name: 'lead_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['tag'],
				operation: ["tag_lead", "untag_lead"],
			},
		},
	},
];
