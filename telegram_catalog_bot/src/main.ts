import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "vuetify/styles"
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import {
    faCheckSquare,
    faSquare,
    faImage,
    faBarChart,
    faCircleCheck,
    faComment,
    faEnvelope,
    faEye,
    faEyeSlash,
    faFaceGrinStars,
    faGrinStars,
    faHandshake,
    faHourglassHalf,
    faLightbulb,
    faPenToSquare,
    faRectangleList,
    faStar,
    faPaste,
    faStarHalfStroke,
    faTrashCan,
    faCircle,
    faUser, faCircleXmark
} from "@fortawesome/free-regular-svg-icons";

import {
    faPlay,
    faPause,
    faShoppingCart,
    faLink,
    faRotateLeft,
    faMicrophoneLines,
    faVideo,
    faFont,
    faRotate,
    faVideoSlash,
    faAngleDoubleDown,
    faBasketball,
    faBars,
    faCheck,
    faChevronLeft,
    faChevronRight,
    faCircleNotch,
    faCoins,
    faFilter,
    faMessage,
    faGear,
    faHandPointer,
    faTrowelBricks,
    faHome,
    faReceipt,
    faLayerGroup,
    faLeftRight,
    faLightbulb as faLightBulbSolid,
    faList,
    faLock, faPaperclip,
    faPen,
    faClose,
    faPlus, faRankingStar, faRobot,
    faScissors,
    faShareNodes, faSquareArrowUpRight,
    faStar as faSolidStar,
    faArrowRight,
    faXmark,
    faCartShopping,
    faCircleDot,
    faFloppyDisk,
    faBan,
    faAnglesUp,
    faAnglesDown,
    faAngleUp,
    faGift,
    faAngleDown,
    faCircle as faCircleFill,
    faFlagCheckered,
    faBox,
    faExpand,
    faPersonDigging
} from "@fortawesome/free-solid-svg-icons";

import {faVk, faTelegram, faWhatsapp, faGoogle, faYandex} from "@fortawesome/free-brands-svg-icons";

library.add(
    faYandex,
    faBox,
    faCircleFill,
    faCircle,
    faShoppingCart,
    faFlagCheckered,
    faRotate,
    faCheckSquare,
    faSquare,
    faFont,
    faLink,
    faReceipt,
    faRotateLeft,
    faMicrophoneLines,
    faImage,
    faVideo,
    faVideoSlash,
    faPaste,
    faBasketball,
    faFloppyDisk,
    faPersonDigging,
    faTrowelBricks,
    faRobot,
    faTelegram,
    faRankingStar,
    faVk,
    faGoogle,
    faPaperclip,
    faArrowRight,
    faGift,
    faSquareArrowUpRight,
    faPenToSquare,
    faHourglassHalf,
    faLightBulbSolid,
    faFilter,
    faAngleDown,
    faAngleDoubleDown,
    faCircleCheck,
    faCircleXmark,
    faHandPointer,
    faHandshake,
    faShareNodes,
    faScissors,
    faCoins,
    faCircleDot,
    faBars,
    faBan,
    faLeftRight,
    faTrashCan,
    faList,
    faPen,
    faMessage,
    faPlus,
    faChevronRight,
    faChevronLeft,
    faGear,
    faCircleNotch,
    faXmark,
    faSolidStar,
    faCheck,
    faLayerGroup,
    faStar, faStarHalfStroke, faGrinStars, faFaceGrinStars,
    faRectangleList,
    faLightbulb,
    faHome,
    faLock,
    faUser,
    faEnvelope,
    faComment,
    faEye,
    faEyeSlash,
    faWhatsapp,
    faBarChart,
    faAnglesUp,
    faAnglesDown,
    faAngleUp,
    faCartShopping,
    faPlay,
    faPause,
    faExpand,
)
const vuetify = createVuetify({
    theme: {
        // defaultTheme: 'dark',
        //
    },
    components,
    directives
})

const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
