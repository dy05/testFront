
export interface ExpenseType {
    id?: number;
    title: string;
    amount: string;
    category_label: string;
    user_name: string;
    date: string;
}

export interface CategoryType {
    id?: number;
    label: string;
}

export interface UserType {
    id: number;
    name: string;
}

