import type { INodeProperties } from 'n8n-workflow';

export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['project'] },
		},
		options: [
			{
				name: 'Archive',
				value: 'archive',
				action: 'Archive a project',
				description: 'Archive a project',
			},
			{
				name: 'Cancel',
				value: 'cancel',
				action: 'Cancel a project',
				description: 'Cancel a project with a reason',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a project',
				description: 'Delete a project',
			},
			{
				name: 'Get Work Items',
				value: 'get_work_items',
				action: 'Get project work items',
				description: 'Get all work items for a project',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all projects',
				description: 'List all projects',
			},
			{
				name: 'List by Customer',
				value: 'list_by_customer',
				action: 'List the projects of a customer',
				description: 'List a customer\'s projects',
			},
			{
				name: 'Log Work',
				value: 'log_work',
				action: 'Log work on a project',
				description: 'Log hours worked on a project work item',
			},
			{
				name: 'Mark Delivered',
				value: 'mark_delivered',
				action: 'Mark a project delivered',
				description: 'Mark a project as delivered',
			},
			{
				name: 'Reopen',
				value: 'reopen',
				action: 'Reopen a project',
				description: 'Reopen a delivered or cancelled project',
			},
			{
				name: 'Unarchive',
				value: 'unarchive',
				action: 'Unarchive a project',
				description: 'Restore an archived project',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a project',
				description: 'Update a project\'s details',
			},
		],
		default: 'archive',
	},
];

export const projectFields: INodeProperties[] = [
	{
		displayName: 'Project Name or ID',
		name: 'project_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["get_work_items", "update", "delete", "archive", "unarchive", "mark_delivered", "cancel", "reopen"],
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
				resource: ['project'],
				operation: ["list_by_customer"],
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
				resource: ['project'],
				operation: ["update"],
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
				resource: ['project'],
				operation: ["update"],
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
				resource: ['project'],
				operation: ["update"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Cancellation Reason',
		name: 'cancellation_reason',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["cancel"],
			},
		},
	},
	{
		displayName: 'Work Item',
		name: 'work_item',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["log_work"],
			},
		},
	},
	{
		displayName: 'Project Name or ID',
		name: 'project',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["log_work"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Member Name or ID',
		name: 'member',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getMembers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["log_work"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Hours',
		name: 'hours',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["log_work"],
			},
		},
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ["log_work"],
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
				resource: ['project'],
				operation: ["list"],
			},
		},
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Created After',
				name: 'created_after',
				type: 'string',
				default: '',
				description: 'Show projects created after this date (YYYY-MM-DD)',
			},
			{
				displayName: 'Created Before',
				name: 'created_before',
				type: 'string',
				default: '',
				description: 'Show projects created before this date (YYYY-MM-DD)',
			},
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
				description: 'Filter by customer external ID',
			},
			{
				displayName: 'Manager Name or ID',
				name: 'manager',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by project name',
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
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by project name, description, or customer name',
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
				resource: ['project'],
				operation: ["get_work_items"],
			},
		},
		options: [
			{
				displayName: 'Is Accepted',
				name: 'is_accepted',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Is Finished',
				name: 'is_finished',
				type: 'boolean',
				default: false,
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
				displayName: 'Planned End From',
				name: 'planned_end_from',
				type: 'string',
				default: '',
				description: 'Planned end on or after this date, e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Planned End To',
				name: 'planned_end_to',
				type: 'string',
				default: '',
				description: 'Planned end on or before this date, e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Planned Start From',
				name: 'planned_start_from',
				type: 'string',
				default: '',
				description: 'Planned start on or after this date, e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Planned Start To',
				name: 'planned_start_to',
				type: 'string',
				default: '',
				description: 'Planned start on or before this date, e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by name, description or internal code',
			},
			{
				displayName: 'Work Item Type',
				name: 'work_item_type',
				type: 'string',
				default: '',
				description: 'Filter by work item type',
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
				resource: ['project'],
				operation: ["list_by_customer"],
			},
		},
		options: [
			{
				displayName: 'Archived',
				name: 'archived',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Manager Name or ID',
				name: 'manager',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by project name',
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
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by project name, description, or customer name',
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
				resource: ['project'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
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
				resource: ['project'],
				operation: ["log_work"],
			},
		},
		options: [
			{
				displayName: 'Booking',
				name: 'booking',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
			},
		],
	},
];
