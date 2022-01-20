export interface QuestionInterface {
    id: string;
    qType: string;
    title?: string;
    description?: string;
    btn: boolean;
    options: Array<QuestionOptionInterface>;
}

export interface QuestionOptionInterface {
    title: string;
}