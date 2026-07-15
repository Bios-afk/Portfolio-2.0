export type Stack = {
    id: number;
    name: string;
};

export type Project = {
    id: number;
    title: string;
    description: string | null;
    image_url: string | null;
    slug: string;
    stacks: Stack[];
};
