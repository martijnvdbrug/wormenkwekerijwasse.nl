import {FulfillmentState} from '@vendure/core';

export interface SendcloudParcelStatus {
    id: number;
    message: string;
    /**
     * Corresponding orderState for the sendcloud status
     */
    orderState?: 'Shipped' | 'Delivered' | 'Cancelled'
}

export const sendcloudStates: SendcloudParcelStatus[] = [
    {
        "id": 6,
        "message": "Not sorted"
    },
    {
        "id": 15,
        "message": "Error collecting"
    },
    {
        "id": 1002,
        "message": "Announcement failed"
    },
    {
        "id": 1999,
        "message": "Cancellation requested"
    },
    {
        "id": 1998,
        "message": "Cancelled upstream",
        orderState: 'Cancelled'
    },
    {
        "id": 1000,
        "message": "Ready to send"
    },
    {
        "id": 12,
        "message": "Awaiting customer pickup"
    },
    {
        "id": 11,
        "message": "Delivered",
        orderState: 'Delivered'
    },
    {
        "id": 93,
        "message": "Shipment collected by customer"
    },
    {
        "id": 91,
        "message": "Parcel en route",
        orderState: 'Shipped'
    },
    {
        "id": 80,
        "message": "Unable to deliver",
    },
    {
        "id": 22,
        "message": "Shipment picked up by driver"
    },
    {
        "id": 13,
        "message": "Announced: not collected"
    },
    {
        "id": 8,
        "message": "Delivery attempt failed"
    },
    {
        "id": 7,
        "message": "Being sorted"
    },
    {
        "id": 5,
        "message": "Sorted"
    },
    {
        "id": 4,
        "message": "Delivery delayed"
    },
    {
        "id": 3,
        "message": "En route to sorting center"
    },
    {
        "id": 1,
        "message": "Announced"
    },
    {
        "id": 1337,
        "message": "Unknown status - check carrier track & trace page for more insights"
    },
    {
        "id": 999,
        "message": "No label"
    },
    {
        "id": 1001,
        "message": "Being announced"
    },
    {
        "id": 2000,
        "message": "Cancelled",
        orderState: 'Cancelled'
    },
    {
        "id": 2001,
        "message": "Submitting cancellation request",
    },
    {
        "id": 92,
        "message": "Driver en route",
        orderState: 'Shipped'
    }
]