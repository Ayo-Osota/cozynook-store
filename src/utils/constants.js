
import { GiBoltEye } from 'react-icons/gi'
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { MdOutlineHistory } from "react-icons/md";

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
    Icon: HiMiniRectangleGroup,
    title: 'mission',
    text:
      'We are dedicated to curating a diverse selection of home furniture and artwork that reflects the unique tastes and lifestyles of our clientele.',
  },
  {
    id: 2,
    Icon: GiBoltEye,
    title: 'vision',
    text:
      'We strive to create a sanctuary where every individual can find solace, inspiration, and joy amidst beautifully curated furniture and artwork.',
  },
  {
    id: 3,
    Icon: MdOutlineHistory,
    title: 'history',
    text:
      'What began as a small venture has now grown into a trusted online platform, serving customers across the world.',
  },
]

export const products_url = 'https://3hmvqxyx22.execute-api.us-east-1.amazonaws.com/test/products'

export const single_product_url = `https://3hmvqxyx22.execute-api.us-east-1.amazonaws.com/test/products/`
