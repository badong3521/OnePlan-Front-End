export default interface ListTask {
    page : number | undefined,
    post_per_page : number,
    category : string,
    parent_id : number
  }