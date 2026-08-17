import type { INodeProperties } from 'n8n-workflow';

export const workItemOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['workItem'] },
		},
		options: [
			{
				name: 'Change Status',
				value: 'change_status',
				action: 'Change work item status',
				description: 'Change a work item\'s status',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a work item',
				description: 'Create a new work item',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a work item',
				description: 'Delete a work item',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a work item',
				description: 'Get a single project work item by ID',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a work item',
				description: 'Update a work item\'s details',
			},
		],
		default: 'change_status',
	},
];

export const workItemFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workItem'],
				operation: ["create", "update"],
			},
		},
	},
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
				resource: ['workItem'],
				operation: ["create"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Work Item Type Name or ID',
		name: 'work_item_type_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getWorkItemTypes',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['workItem'],
				operation: ["create"],
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
				resource: ['workItem'],
				operation: ["update", "change_status", "delete", "get"],
			},
		},
	},
	{
		displayName: 'Parent',
		name: 'parent',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workItem'],
				operation: ["update"],
			},
		},
	},
	{
		displayName: 'Delete Descendants',
		name: 'delete_descendants',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['workItem'],
				operation: ["delete"],
			},
		},
	},
	{
		displayName: 'Reparent ID',
		name: 'reparent_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['workItem'],
				operation: ["delete"],
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
				resource: ['workItem'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Constraint Date',
				name: 'constraint_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Constraint Type',
				name: 'constraint_type',
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
				displayName: 'Estimated Duration Days',
				name: 'estimated_duration_days',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Estimated Work Hours',
				name: 'estimated_work_hours',
				type: 'number',
				default: 0,
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
				displayName: 'Parent Work Item ID',
				name: 'parent_work_item_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Planned Finish Date',
				name: 'planned_finish_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Planned Start Date',
				name: 'planned_start_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Product',
				name: 'product',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Visible To Customer',
				name: 'visible_to_customer',
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
				resource: ['workItem'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Constraint Date',
				name: 'constraint_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Constraint Type',
				name: 'constraint_type',
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
				displayName: 'Estimated Duration Days',
				name: 'estimated_duration_days',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Estimated Work Hours',
				name: 'estimated_work_hours',
				type: 'number',
				default: 0,
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
				displayName: 'Planned Finish Date',
				name: 'planned_finish_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Planned Start Date',
				name: 'planned_start_date',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Product',
				name: 'product',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Visible To Customer',
				name: 'visible_to_customer',
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
				resource: ['workItem'],
				operation: ["change_status"],
			},
		},
		options: [
			{
				displayName: 'Finished At',
				name: 'finished_at',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Finished',
				name: 'is_finished',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Percent Complete',
				name: 'percent_complete',
				type: 'number',
				default: 0,
			},
		],
	},
];
