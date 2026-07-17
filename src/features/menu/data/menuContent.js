import bannerBg from '../../../assets/menu_banner_bg.png'
import chaCaLaVongImg from '../../../assets/d5fedfa5-e72d-4a66-bcec-1b6d5283ee7d.png'
import chaCaChienImg from '../../../assets/74e49f1f-baa2-4565-8040-7e22112a4e74.png'
import chaCaXaoHanhImg from '../../../assets/menu_cha_ca_xao_hanh.png'
import chaCaOmDuaImg from '../../../assets/cha_ca_om_dua.png'
import chaCaThiLaImg from '../../../assets/menu_cha_ca_thi_la.png'
import longCaXaoDuaImg from '../../../assets/menu_long_ca_xao_dua.png'
import nemHaiSanImg from '../../../assets/menu_nem_hai_san.png'
import saladRauTronImg from '../../../assets/salad_rau_tron.png'
import canhChuaCaLangImg from '../../../assets/canh_chua_ca_lang.png'
import comTrangImg from '../../../assets/com_trang.png'
import chaCaHapThiLaImg from '../../../assets/menu_cha_ca_hap_thi_la.png'

import comboTwoImage from '../../../assets/8b8fa749-95b0-4e78-b13c-132e0fe2b866.png'
import comboFourImage from '../../../assets/86069030-1520-4cf5-b94c-488658157353.png'
import comboSixImage from '../../../assets/4f8154e5-4396-48dd-b3ae-c86849865bf6.png'

export const menuHero = {
  bannerBg,
  script: 'Thực đơn',
  title: 'CHẢ CÁ TRÀNG AN',
  description:
    'Tinh hoa ẩm thực Hà Thành – chả cá tươi ngon, tẩm ướp theo công thức gia truyền, kết hợp cùng nguyên liệu chọn lọc mang đến hương vị khó quên.',
}

export const menuCategories = [
  { id: 'all', label: 'Tất cả món', icon: 'CookingPot' },
  { id: 'signature', label: 'Món đặc trưng', icon: 'FishSimple' },
  { id: 'appetizer', label: 'Món khai vị', icon: 'Egg' },
  { id: 'main', label: 'Món chính', icon: 'BowlFood' },
  { id: 'combo', label: 'Combo', icon: 'Gift' },
  { id: 'drink', label: 'Đồ uống', icon: 'Coffee' },
]

export const recommendedDish = {
  name: 'Chả Cá Hấp Thì Là',
  description: 'Chả cá hấp mềm ngọt, dậy mùi thì là thơm mát, thanh nhẹ.',
  price: '129.000đ',
  image: chaCaHapThiLaImg,
  tag: 'Được yêu thích',
  alt: 'Chảo chả cá hấp thì là nóng hổi thơm phức.',
}

export const menuDishes = [
  {
    name: 'Chả Cá Lã Vọng',
    price: '139.000đ',
    image: chaCaLaVongImg,
    description: 'Chả cá lăng tươi ướp nghệ, thì là, ăn kèm bún, lạc rang, mắm tôm.',
    tag: 'Bán chạy',
    category: 'signature',
  },
  {
    name: 'Chả Cá Chiên',
    price: '139.000đ',
    image: chaCaChienImg,
    description: 'Chả cá chiên vàng giòn bên ngoài, thơm mềm bên trong.',
    tag: 'Bán chạy',
    category: 'signature',
  },
  {
    name: 'Chả Cá Xào Hành',
    price: '139.000đ',
    image: chaCaXaoHanhImg,
    description: 'Chả cá xào hành tây, cần tây, thơm ngon, đậm vị.',
    category: 'signature',
  },
  {
    name: 'Chả Cá Om Dưa',
    price: '139.000đ',
    image: chaCaOmDuaImg,
    description: 'Chả cá om cùng dưa chua, cà chua, đậm đà khó cưỡng.',
    category: 'main',
  },
  {
    name: 'Chả Cá Thì Là',
    price: '139.000đ',
    image: chaCaThiLaImg,
    description: 'Chả cá xào thì là, dậy mùi thơm đặc trưng, hấp dẫn.',
    category: 'signature',
  },
  {
    name: 'Lòng Cá Xào Dứa',
    price: '119.000đ',
    image: longCaXaoDuaImg,
    description: 'Lòng cá tươi xào dứa, ớt chuông, thơm lừng, đậm đà.',
    tag: 'Mới',
    category: 'main',
  },
  {
    name: 'Nem Hải Sản',
    price: '99.000đ',
    image: nemHaiSanImg,
    description: 'Nem hải sản giòn rụm, nhân tôm mực tươi, thơm ngon.',
    tag: 'Bán chạy',
    category: 'appetizer',
  },
  {
    name: 'Salad Rau Trộn',
    price: '59.000đ',
    image: saladRauTronImg,
    description: 'Rau xanh tươi mát, sốt mè rang thanh nhẹ, tốt cho sức khỏe.',
    category: 'appetizer',
  },
  {
    name: 'Canh Chua Cá Lăng',
    price: '119.000đ',
    image: canhChuaCaLangImg,
    description: 'Canh chua thanh mát, cá lăng tươi ngon, đậm vị quê.',
    category: 'main',
  },
  {
    name: 'Cơm Trắng',
    price: '20.000đ',
    image: comTrangImg,
    description: 'Cơm dẻo thơm, ăn kèm cùng các món chả cá.',
    category: 'main',
  },
]

export const menuCombos = [
  {
    name: 'Combo 2 người',
    description: '2 - 3 món cho 2 người (Chả cá Lã Vọng, Nem hải sản, bún rau ăn kèm)',
    price: '299.000đ',
    image: comboTwoImage,
    category: 'combo',
  },
  {
    name: 'Combo 4 người',
    description: '4 - 5 món cho 4 người (Chả cá Lã Vọng, Lòng cá xào dứa, Canh chua cá lăng, nem)',
    price: '549.000đ',
    image: comboFourImage,
    category: 'combo',
  },
  {
    name: 'Combo 6 người',
    description: '5 - 6 món cho 6 người (Bao gồm đầy đủ các món chả cá đặc trưng và canh lẩu)',
    price: '799.000đ',
    image: comboSixImage,
    category: 'combo',
  },
]

export const menuDrinks = [
  {
    name: 'Nước Mía Cát Thơm',
    price: '20.000đ',
    description: 'Nước mía nguyên chất mát lành xắt thêm dứa cát ngọt dịu.',
    category: 'drink',
  },
  {
    name: 'Trà Đá Tràng An',
    price: '5.000đ',
    description: 'Trà xanh Thái Nguyên thơm ngon, giải nhiệt cực tốt.',
    category: 'drink',
  },
  {
    name: 'Nước Suối Tinh Khiết',
    price: '10.000đ',
    description: 'Nước khoáng đóng chai mát lạnh.',
    category: 'drink',
  },
  {
    name: 'Bia Hà Nội',
    price: '25.000đ',
    description: 'Bia chai/lon Hà Nội ướp lạnh, uống kèm chả cá cực hợp.',
    category: 'drink',
  },
]
