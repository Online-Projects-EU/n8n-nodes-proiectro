import type { INodeProperties } from 'n8n-workflow';

export const operationalWorkItemOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['operationalWorkItem'] },
		},
		options: [
			{
				name: 'Approve',
				value: 'approve',
				action: 'Approve an operational work item',
				description: 'Approve a work item at an approval-required stage',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an operational work item',
				description: 'Create a new operational work item (enters INPUT stage)',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an operational work item',
				description: 'Delete an operational work item',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an operational work item',
				description: 'Get a single operational work item by ID',
			},
			{
				name: 'History',
				value: 'history',
				action: 'Get operational work item history',
				description: 'Get the full movement/approval history of a work item',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all operational work items',
				description: 'List all operational work items across processes',
			},
			{
				name: 'List Stage Items',
				value: 'stage_items',
				action: 'List operational work items by stage',
				description: 'List all work items in a specific process stage',
			},
			{
				name: 'Move',
				value: 'move',
				action: 'Move an operational work item',
				description: 'Move a work item to the next stage in its process',
			},
			{
				name: 'My Approvals',
				value: 'my_approvals',
				action: 'List my pending approvals',
				description: 'List work items pending the user\'s approval',
			},
			{
				name: 'My Work Items',
				value: 'my_items',
				action: 'List my operational work items',
				description: 'List work items assigned to the authenticated user',
			},
			{
				name: 'Reassign',
				value: 'reassign',
				action: 'Reassign an operational work item',
				description: 'Reassign a work item to a different team member',
			},
			{
				name: 'Reject',
				value: 'reject',
				action: 'Reject an operational work item',
				description: 'Reject a work item back to its previous stage',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an operational work item',
				description: 'Update an operational work item\'s details',
			},
		],
		default: 'approve',
	},
];

export const operationalWorkItemFields: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['operationalWorkItem'],
				operation: ["get", "update", "delete", "move", "approve", "reject", "reassign", "history"],
			},
		},
	},
	{
		displayName: 'Process',
		name: 'process',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['operationalWorkItem'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['operationalWorkItem'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Target Stage',
		name: 'target_stage',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['operationalWorkItem'],
				operation: ["move", "approve"],
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
				resource: ['operationalWorkItem'],
				operation: ["reject"],
			},
		},
	},
	{
		displayName: 'Process Name or ID',
		name: 'process_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getProcesses',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['operationalWorkItem'],
				operation: ["stage_items"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['operationalWorkItem'],
				operation: ["list"],
			},
		},
		options: [
			{
				displayName: 'Current Stage',
				name: 'current_stage',
				type: 'string',
				default: '',
				description: 'Filter by current stage',
			},
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
				description: 'Filter by customer organization',
			},
			{
				displayName: 'Due From',
				name: 'due_from',
				type: 'string',
				default: '',
				description: 'Due on or after this date, e.g. \'02 Jan, 2025\'',
			},
			{
				displayName: 'Due To',
				name: 'due_to',
				type: 'string',
				default: '',
				description: 'Due on or before this date, e.g. \'02 Jan, 2025\'',
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
				displayName: 'Priority',
				name: 'priority',
				type: 'string',
				default: '',
				description: 'Filter by priority',
			},
			{
				displayName: 'Process',
				name: 'process',
				type: 'string',
				default: '',
				description: 'Filter by process',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by name or description',
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
				resource: ['operationalWorkItem'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Customer Asset',
				name: 'customer_asset',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'due_date',
				type: 'string',
				default: '',
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
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{ name: 'Critical', value: 'critical' },
					{ name: 'High', value: 'high' },
					{ name: 'Low', value: 'low' },
					{ name: 'Normal', value: 'normal' },
				],
				default: 'critical',
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
				resource: ['operationalWorkItem'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Customer Asset',
				name: 'customer_asset',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Due Date',
				name: 'due_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
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
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{ name: 'Critical', value: 'critical' },
					{ name: 'High', value: 'high' },
					{ name: 'Low', value: 'low' },
					{ name: 'Normal', value: 'normal' },
				],
				default: 'critical',
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
				resource: ['operationalWorkItem'],
				operation: ["move"],
			},
		},
		options: [
			{
				displayName: 'Geo Accuracy M',
				name: 'geo_accuracy_m',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Latitude',
				name: 'geo_latitude',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Longitude',
				name: 'geo_longitude',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Overridden',
				name: 'geo_overridden',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Notes',
				name: 'notes',
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
				resource: ['operationalWorkItem'],
				operation: ["approve"],
			},
		},
		options: [
			{
				displayName: 'Geo Accuracy M',
				name: 'geo_accuracy_m',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Latitude',
				name: 'geo_latitude',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Longitude',
				name: 'geo_longitude',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Overridden',
				name: 'geo_overridden',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Notes',
				name: 'notes',
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
				resource: ['operationalWorkItem'],
				operation: ["reject"],
			},
		},
		options: [
			{
				displayName: 'Geo Accuracy M',
				name: 'geo_accuracy_m',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Latitude',
				name: 'geo_latitude',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Longitude',
				name: 'geo_longitude',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Geo Overridden',
				name: 'geo_overridden',
				type: 'boolean',
				default: false,
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
				resource: ['operationalWorkItem'],
				operation: ["reassign"],
			},
		},
		options: [
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
		],
	},
];
