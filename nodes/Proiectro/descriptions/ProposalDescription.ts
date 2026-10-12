import type { INodeProperties } from 'n8n-workflow';

export const proposalOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['proposal'] },
		},
		options: [
			{
				name: 'Accept Order',
				value: 'accept_order',
				action: 'Accept an order',
				description: 'Accept an order a customer placed in the portal; it becomes a project with its payment scheduled',
			},
			{
				name: 'Change Stage',
				value: 'change_stage',
				action: 'Change proposal stage',
				description: 'Move a proposal to a different pipeline stage',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a proposal',
				description: 'Create a new proposal',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a proposal',
				description: 'Delete a proposal',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a proposal',
				description: 'Get a single proposal by ID',
			},
			{
				name: 'List',
				value: 'list',
				action: 'List proposals',
				description: 'List proposals for an organization',
			},
			{
				name: 'List Active',
				value: 'list_active',
				action: 'List active proposals',
				description: 'List active proposals across the workspace',
			},
			{
				name: 'Log Sales Activity',
				value: 'log_activity',
				action: 'Log a sales activity',
				description: 'Log a sales activity (call, email, meeting) against a customer or project',
			},
			{
				name: 'Mark Order Delivered',
				value: 'mark_order_delivered',
				action: 'Mark an order delivered',
				description: 'Close an accepted order as delivered when the customer has not confirmed receipt',
			},
			{
				name: 'Reject Order',
				value: 'reject_order',
				action: 'Reject an order',
				description: 'Reject an order a customer placed in the portal, with a reason the customer sees',
			},
			{
				name: 'Reopen',
				value: 'reopen',
				action: 'Reopen a proposal',
				description: 'Reopen a closed proposal',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a proposal',
				description: 'Update an existing proposal',
			},
		],
		default: 'accept_order',
	},
];

export const proposalFields: INodeProperties[] = [
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
				resource: ['proposal'],
				operation: ["list"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				resource: ['proposal'],
				operation: ["get", "update", "change_stage", "reopen", "delete", "accept_order", "reject_order", "mark_order_delivered"],
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
				resource: ['proposal'],
				operation: ["create", "update"],
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
				resource: ['proposal'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Customer',
		name: 'customer',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Owner Name or ID',
		name: 'owner',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getMembers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["create", "update"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				resource: ['proposal'],
				operation: ["create"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Sales Stage',
		name: 'sales_stage',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Proposal Currency',
		name: 'proposal_currency',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Wbsconfiguration',
		name: 'wbsconfiguration',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Stage ID',
		name: 'stage_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["change_stage"],
			},
		},
	},
	{
		displayName: 'Activity Type',
		name: 'activity_type',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["log_activity"],
			},
		},
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["log_activity"],
			},
		},
	},
	{
		displayName: 'Confirmation',
		name: 'confirmation',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["accept_order", "mark_order_delivered"],
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
				resource: ['proposal'],
				operation: ["reject_order"],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['proposal'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Customer Asset',
				name: 'customer_asset',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Customer Location',
				name: 'customer_location',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Minimum Margin Percent',
				name: 'minimum_margin_percent',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Pricing Adjustment Amount',
				name: 'pricing_adjustment_amount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Pricing Adjustment Percent',
				name: 'pricing_adjustment_percent',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Pricing Strategy',
				name: 'pricing_strategy',
				type: 'options',
				options: [
					{ name: 'Fixed Amount', value: 'fixed_amount' },
					{ name: 'Margin Target', value: 'margin_target' },
					{ name: 'Percentage', value: 'percentage' },
					{ name: 'Product Prices', value: 'product_prices' },
				],
				default: 'product_prices',
			},
			{
				displayName: 'Project Enable Booking Management',
				name: 'project_enable_booking_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Earned Value Management',
				name: 'project_enable_earned_value_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Effort Management',
				name: 'project_enable_effort_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Financial Management',
				name: 'project_enable_financial_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Resource Management',
				name: 'project_enable_resource_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Schedule Management',
				name: 'project_enable_schedule_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project End Date',
				name: 'project_end_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Start Date',
				name: 'project_start_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Proposal Valid Since',
				name: 'proposal_valid_since',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Proposal Valid Until',
				name: 'proposal_valid_until',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Rfp Publication',
				name: 'rfp_publication',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Target Margin Percent',
				name: 'target_margin_percent',
				type: 'number',
				default: 0,
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
				resource: ['proposal'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Customer Asset',
				name: 'customer_asset',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Customer Location',
				name: 'customer_location',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Minimum Margin Percent',
				name: 'minimum_margin_percent',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Pricing Adjustment Amount',
				name: 'pricing_adjustment_amount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Pricing Adjustment Percent',
				name: 'pricing_adjustment_percent',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Pricing Strategy',
				name: 'pricing_strategy',
				type: 'options',
				options: [
					{ name: 'Fixed Amount', value: 'fixed_amount' },
					{ name: 'Margin Target', value: 'margin_target' },
					{ name: 'Percentage', value: 'percentage' },
					{ name: 'Product Prices', value: 'product_prices' },
				],
				default: 'product_prices',
			},
			{
				displayName: 'Project Enable Booking Management',
				name: 'project_enable_booking_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Earned Value Management',
				name: 'project_enable_earned_value_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Effort Management',
				name: 'project_enable_effort_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Financial Management',
				name: 'project_enable_financial_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Resource Management',
				name: 'project_enable_resource_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project Enable Schedule Management',
				name: 'project_enable_schedule_management',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Project End Date',
				name: 'project_end_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Start Date',
				name: 'project_start_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Proposal Valid Since',
				name: 'proposal_valid_since',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Proposal Valid Until',
				name: 'proposal_valid_until',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Rfp Publication',
				name: 'rfp_publication',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Target Margin Percent',
				name: 'target_margin_percent',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Wbsconfiguration',
				name: 'wbsconfiguration',
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
				resource: ['proposal'],
				operation: ["change_stage"],
			},
		},
		options: [
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'I Have Followed The Instructions',
				name: 'i_have_followed_the_instructions',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Rejection Reason',
				name: 'rejection_reason',
				type: 'string',
				default: '',
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
				resource: ['proposal'],
				operation: ["list_active"],
			},
		},
		options: [
			{
				displayName: 'Created After',
				name: 'created_after',
				type: 'string',
				default: '',
				description: 'Filter proposals created after this date (ISO format)',
			},
			{
				displayName: 'Created Before',
				name: 'created_before',
				type: 'string',
				default: '',
				description: 'Filter proposals created before this date (ISO format)',
			},
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
				description: 'Filter by customer external ID',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by proposal name',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Sales Stage',
				name: 'sales_stage',
				type: 'string',
				default: '',
				description: 'Filter by sales stage external ID',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by proposal name, description, or customer name',
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
				resource: ['proposal'],
				operation: ["log_activity"],
			},
		},
		options: [
			{
				displayName: 'Org',
				name: 'org',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Name or ID',
				name: 'project',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
		],
	},
];
