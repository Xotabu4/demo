export interface IComments {
    id: number,
    comments: Array<Comment>
}


export interface Comment {
    message: number,
    postId: string,
}
