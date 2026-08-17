import type { INodeProperties } from 'n8n-workflow';

export const documentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['document'] },
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a document',
				description: 'Delete a document',
			},
			{
				name: 'Finalize',
				value: 'finalize',
				action: 'Finalize a document',
				description: 'Finalize a draft document, assigning its number from a series',
			},
			{
				name: 'Generate for Customer',
				value: 'generate_customer',
				action: 'Generate a customer document',
				description: 'Generate a document from a template for a customer',
			},
			{
				name: 'Generate for Customer Asset',
				value: 'generate_asset',
				action: 'Generate a customer asset document',
				description: 'Generate a document from a template for a customer asset',
			},
			{
				name: 'Generate for External Support Request',
				value: 'generate_external_support',
				action: 'Generate an external support request document',
				description: 'Generate a document from a template for a customer\'s support request',
			},
			{
				name: 'Generate for Location',
				value: 'generate_location',
				action: 'Generate a location document',
				description: 'Generate a document from a template for a location',
			},
			{
				name: 'Generate for Operational Item',
				value: 'generate_operational',
				action: 'Generate an operational work item document',
				description: 'Generate a document from a template for an operational work item',
			},
			{
				name: 'Generate for Proposal',
				value: 'generate_proposal',
				action: 'Generate a proposal document',
				description: 'Generate a document from a template for a proposal',
			},
			{
				name: 'Generate for Support Request',
				value: 'generate_support',
				action: 'Generate a support request document',
				description: 'Generate a document from a template for an internal support request',
			},
			{
				name: 'Generate General',
				value: 'generate_general',
				action: 'Generate a general document',
				description: 'Generate a document from a template with no linked record',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all documents',
				description: 'List generated documents',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a document',
				description: 'Update a draft document\'s title, body or classification',
			},
		],
		default: 'delete',
	},
];

export const documentFields: INodeProperties[] = [
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
				resource: ['document'],
				operation: ["generate_proposal"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Template Name or ID',
		name: 'template_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getDocumentTemplates',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ["generate_proposal", "generate_customer", "generate_operational", "generate_support", "generate_external_support", "generate_location", "generate_asset", "generate_general"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				resource: ['document'],
				operation: ["generate_customer"],
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
				resource: ['document'],
				operation: ["generate_operational"],
			},
		},
	},
	{
		displayName: 'Support Request ID',
		name: 'support_request_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ["generate_support", "generate_external_support"],
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ["generate_location"],
			},
		},
	},
	{
		displayName: 'Asset ID',
		name: 'asset_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ["generate_asset"],
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
				resource: ['document'],
				operation: ["finalize", "update", "delete"],
			},
		},
	},
	{
		displayName: 'Series ID',
		name: 'series_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ["finalize"],
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
				resource: ['document'],
				operation: ["list"],
			},
		},
		options: [
			{
				displayName: 'Context Type',
				name: 'context_type',
				type: 'string',
				default: '',
				description: 'Filter by attached entity type',
			},
			{
				displayName: 'Org Name or ID',
				name: 'org_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCustomers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by title or number',
			},
			{
				displayName: 'Series Code',
				name: 'series_code',
				type: 'string',
				default: '',
				description: 'Filter by series',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Filter by status',
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
				resource: ['document'],
				operation: ["generate_proposal"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_customer"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_operational"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_support"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_external_support"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_location"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_asset"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["generate_general"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
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
				resource: ['document'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Data Classification',
				name: 'data_classification',
				type: 'options',
				options: [
					{ name: 'Confidential', value: 'confidential' },
					{ name: 'Internal', value: 'internal' },
					{ name: 'Personal Data', value: 'personal_data' },
				],
				default: 'internal',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
			},
		],
	},
];
