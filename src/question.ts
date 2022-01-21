export interface QuestionInterface {
    qType: string;
    title?: string;
    desc: string;
    btn: boolean;
    options: Array<QuestionOptionInterface>;
}

export interface QuestionOptionInterface {
    desc: string;
}