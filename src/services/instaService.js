export default class InstaService{
  constructor(){
    this._apiBase='http://localhost:8080';
  }
  getResource=async (url)=>{
    const res=await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`,`resived ${res.status}`);
    }
    return await res.json();
  }

  getCollection=async () => {
    const res=await this.getResource('/posts/');
    return res;
  }
}
