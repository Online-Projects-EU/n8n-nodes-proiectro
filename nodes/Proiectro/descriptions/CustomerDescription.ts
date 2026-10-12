import type { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['customer'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a customer',
				description: 'Create a new customer',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a customer',
				description: 'Delete a customer',
			},
			{
				name: 'Enrich Company',
				value: 'enrich',
				action: 'Enrich a company by CUI',
				description: 'Look up a Romanian company by CUI (name, registration number, VAT status, address)',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a customer',
				description: 'Get a single customer by ID',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all customers',
				description: 'Get all customers in the workspace',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a customer',
				description: 'Update an existing customer',
			},
		],
		default: 'create',
	},
];

export const customerFields: INodeProperties[] = [
	{
		displayName: 'Subtenant Name or ID',
		name: 'subtenant_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["get", "update", "delete"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Parent Name or ID',
		name: 'parent_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["create"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Default Currency',
		name: 'default_currency',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Manager Name or ID',
		name: 'manager',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getMembers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["create", "update"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Cui',
		name: 'cui',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ["enrich"],
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
				resource: ['customer'],
				operation: ["list"],
			},
		},
		options: [
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'My Orgs',
				name: 'my_orgs',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by organization name',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by organization name or path name',
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
				resource: ['customer'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Domains',
				name: 'domains',
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
				resource: ['customer'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Domains',
				name: 'domains',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Portal Ordering Enabled',
				name: 'portal_ordering_enabled',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Portal Quote Requests Enabled',
				name: 'portal_quote_requests_enabled',
				type: 'boolean',
				default: false,
			},
		],
	},
];
