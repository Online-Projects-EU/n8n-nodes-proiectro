import type { INodeProperties } from 'n8n-workflow';

export const timerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['timer'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a timer',
				description: 'Create a timer',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a timer',
				description: 'Delete a timer',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all timers',
				description: 'List timers',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a timer',
				description: 'Update a timer\'s schedule',
			},
		],
		default: 'create',
	},
];

export const timerFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['timer'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Timer ID',
		name: 'timer_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['timer'],
				operation: ["update", "delete"],
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
				resource: ['timer'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Enabled',
				name: 'is_enabled',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Schedule Day Of Month',
				name: 'schedule_day_of_month',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Schedule Day Of Week',
				name: 'schedule_day_of_week',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Schedule Hour',
				name: 'schedule_hour',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Schedule Type',
				name: 'schedule_type',
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
				resource: ['timer'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Enabled',
				name: 'is_enabled',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Schedule Day Of Month',
				name: 'schedule_day_of_month',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Schedule Day Of Week',
				name: 'schedule_day_of_week',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Schedule Hour',
				name: 'schedule_hour',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Schedule Type',
				name: 'schedule_type',
				type: 'string',
				default: '',
			},
		],
	},
];
