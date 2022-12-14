type Topic = {
    id: string;
    title: string;
    content?: string;
    related?: string[];
    logo?: string;
    color?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
    isDeleted?: boolean;
    isPublished?: boolean;
    isPrivate?: boolean;
    isArchived?: boolean;
    isFeatured?: boolean;
    isLocked?: boolean;

}