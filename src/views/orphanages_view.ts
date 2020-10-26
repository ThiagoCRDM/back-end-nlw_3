import Orphanage from '../model/Orphanage'
import imagesView from './images_view'
export default {
  render(orphanage: Orphanage){
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude, 
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanage: Array<Orphanage>){
    return orphanage.map(orphanage => this.render(orphanage));
  }
}