/**
 * Represents an item from SimCity BuildIt.
 */
export interface ItemType {
    id: number;
    name: string;
    url_image: string;
    is_primitive: boolean;
    cost: CostType[];
}

/**
 * Represents one item, a reduced version of an item to represent the cost of it.
 */
export interface CostType {
    id: number;
    name: string;
    amount: number;
}
