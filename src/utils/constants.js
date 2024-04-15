
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'special offers',
    url: '/promo',
  },
]

export const services = [
  {
    id: 1,
    icon: GiCompass,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: GiDiamondHard,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: GiStabbedNote,
    title: 'history',
    text:
      'What began as a small venture has now grown into a trusted online platform, serving customers across the world.',
  },
]

export const products_url = 'https://3hmvqxyx22.execute-api.us-east-1.amazonaws.com/test/products'

export const single_product_url = `https://3hmvqxyx22.execute-api.us-east-1.amazonaws.com/test/products/`
