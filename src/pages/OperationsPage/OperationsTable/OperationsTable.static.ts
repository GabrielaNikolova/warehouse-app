interface Operation {
    id?: string;
    type?: string;
    date?: string;
    client?: string;
    warehouse?: string;
    isTransfer?: string;
    error?: string;
}

export type { Operation };
