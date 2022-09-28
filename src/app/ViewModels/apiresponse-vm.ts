export interface APIResponseVM {
    success:boolean,
    data:any,
    messages:string[],
    pageNO?:number,
    totalPages?:number,
    itemsPerPage?:number
}
