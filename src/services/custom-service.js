export default class CustomService {

  _apiBase = 'http://164.92.190.147:8003/api'
 
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllCaps = async () => {
    const res = await this.getResource(`/caps/`);
    return res.results
  };

  getCap = async (id) => {
    const cap = await this.getResource(`/caps/${id}/`);
    return this._transformCap(cap);
  };

  getStickerCaps = async () => {
    const res = await this.getResource(`/caps/`);
    return res.results.slice(0, 9);
  }

  _transformCap = (cap) => {
    const img = cap.capsimage
    const photo = img.map(pic => {
      return pic.photo
    })
    return {
      id: cap.id,
      brand: cap.brand.name,
      name: cap.name,
      price: cap.price,
      size: cap.size,
      pic: photo,
    }
  };


}

