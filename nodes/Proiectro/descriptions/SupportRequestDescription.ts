import type { INodeProperties } from 'n8n-workflow';

export const supportRequestOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['supportRequest'] },
		},
		options: [
			{
				name: 'Add Comment',
				value: 'add_comment',
				action: 'Add comment to support request',
				description: 'Add a comment to a support request',
			},
			{
				name: 'Change Status',
				value: 'change_status',
				action: 'Change support request status',
				description: 'Change the status of a support request',
			},
			{
				name: 'Close',
				value: 'close',
				action: 'Close a support request',
				description: 'Close a support request',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a support request',
				description: 'Create a new support request',
			},
			{
				name: 'Edit',
				value: 'edit',
				action: 'Edit a support request',
				description: 'Edit a support request',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a support request',
				description: 'Get a single support request by ID',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all support requests',
				description: 'List all support requests',
			},
			{
				name: 'My Assigned',
				value: 'my_assigned',
				action: 'List my assigned support requests',
				description: 'List support requests assigned to me',
			},
			{
				name: 'Reassign',
				value: 'reassign',
				action: 'Reassign a support request',
				description: 'Reassign a support request',
			},
			{
				name: 'Reopen',
				value: 'reopen',
				action: 'Reopen a support request',
				description: 'Reopen a support request',
			},
		],
		default: 'add_comment',
	},
];

export const supportRequestFields: INodeProperties[] = [
	{
		displayName: 'Support Request ID',
		name: 'support_request_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["get", "edit", "close", "reopen", "change_status", "reassign", "add_comment"],
			},
		},
	},
	{
		displayName: 'Request Type',
		name: 'request_type',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["create", "edit"],
			},
		},
	},
	{
		displayName: 'Request Severity',
		name: 'request_severity',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["create", "edit"],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["create", "edit"],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["create", "edit"],
			},
		},
	},
	{
		displayName: 'Status ID',
		name: 'status_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["close", "change_status"],
			},
		},
	},
	{
		displayName: 'Resolution',
		name: 'resolution',
		type: 'options',
		required: true,
		options: [
			{ name: 'Cannot Reproduce', value: 'CANNOT_REPRODUCE' },
			{ name: 'Done', value: 'DONE' },
			{ name: 'Duplicate', value: 'DUPLICATE' },
			{ name: 'Expired', value: 'EXPIRED' },
			{ name: 'Fixed', value: 'FIXED' },
			{ name: 'Merged', value: 'MERGED' },
			{ name: 'No Longer Required', value: 'NO_LONGER_REQUIRED' },
			{ name: 'Not An Issue', value: 'NOT_AN_ISSUE' },
			{ name: 'Wont Fix', value: 'WONT_FIX' },
		],
		default: 'FIXED',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["close"],
			},
		},
	},
	{
		displayName: 'Reason',
		name: 'reason',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["close", "change_status"],
			},
		},
		description: 'Reason for closing the support request',
	},
	{
		displayName: 'Assignee ID',
		name: 'assignee_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["reassign"],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["add_comment"],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["list"],
			},
		},
		options: [
			{
				displayName: 'Assignee ID',
				name: 'assignee_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Customer ID',
				name: 'customer_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lifecycle Filter',
				name: 'lifecycle_filter',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Name or ID',
				name: 'project_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Queue ID',
				name: 'queue_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Requester ID',
				name: 'requester_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Severity ID',
				name: 'severity_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Status ID',
				name: 'status_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Type ID',
				name: 'type_id',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["edit"],
			},
		},
		options: [
			{
				displayName: 'Root Cause Asset',
				name: 'root_cause_asset',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["add_comment"],
			},
		},
		options: [
			{
				displayName: 'Parent Name or ID',
				name: 'parent_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCustomers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
		],
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['supportRequest'],
				operation: ["my_assigned"],
			},
		},
		options: [
			{
				displayName: 'Created From',
				name: 'created_from',
				type: 'string',
				default: '',
				description: 'Filter by creation date (from), e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Created To',
				name: 'created_to',
				type: 'string',
				default: '',
				description: 'Filter by creation date (to), e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
				description: 'Filter by customer organization',
			},
			{
				displayName: 'Queue',
				name: 'queue',
				type: 'string',
				default: '',
				description: 'Filter by queue',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search in title, description, or ticket ID',
			},
			{
				displayName: 'Severity',
				name: 'severity',
				type: 'string',
				default: '',
				description: 'Filter by severity level',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Filter by status',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Filter by request type',
			},
		],
	},
];
