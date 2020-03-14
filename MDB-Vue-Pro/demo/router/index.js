import Vue from 'vue';
import Router from 'vue-router';

// CATEGORIES
import CSSPage from '../docs/categories/CSSPage';
import ComponentsPage from '../docs/categories/ComponentsPage';
import AdvancedPage from '../docs/categories/AdvancedPage';
import NavigationMenuPage from '../docs/categories/NavigationMenuPage';
import FormsMenuPage from '../docs/categories/FormsMenuPage';
import TablesPage from '../docs/categories/TablesPage';
import ModalsPage from '../docs/categories/ModalsPage';
import AddonsPage from '../docs/categories/AddonsPage';

// FREE
import AlertPage from '../docs/AlertPage';
import AccordionPage from '../docs/AccordionPage';
import IframePage from '../docs/IframePage';
import HomePage from '../docs/HomePage';
import GridPage from '../docs/GridPage';
import BadgePage from '../docs/BadgePage';
import BackgroundImagePage from '../docs/BackgroundImagePage';
import CardPage from '../docs/CardPage';
import ButtonPage from '../docs/ButtonPage';
import HamburgerMenuPage from '../docs/HamburgerMenuPage';
import GradientPage from '../docs/GradientPage';
import GoogleMapsPage from '../docs/GoogleMapsPage';
import TablePage from '../docs/TablePage';
import TableAdditionalPage from '../docs/TableAdditionalPage';
import DataTablePage from '../docs/DataTablePage';
import TableResponsivePage from '../docs/TableResponsivePage';
import TablePaginationPage from '../docs/TablePaginationPage';
import TableScrollPage from '../docs/TableScrollPage';
import TableSearchPage from '../docs/TableSearchPage';
import TableSortPage from '../docs/TableSortPage';
import DropdownPage from '../docs/DropdownPage';
import JumbotronPage from '../docs/JumbotronPage';
import CarouselPage from '../docs/CarouselPage';
import BreadcrumbPage from '../docs/BreadcrumbPage';
import FaPage from '../docs/FaPage';
import InputsPage from '../docs/InputsPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import MediaPage from '../docs/MediaPage';
import ListGroupPage from '../docs/ListGroupPage';
import NavbarPage from '../docs/NavbarPage';
import NavigationPage from '../docs/NavigationPage';
import CollapsePage from '../docs/CollapsePage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
import ChartPage from '../docs/ChartPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import TooltipPage from '../docs/TooltipPage';
import PopoverPage from '../docs/PopoverPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import MasksPage from '../docs/MasksPage';
import HoverPage from '../docs/HoverPage';
import VideoCarouselPage from '../docs/VideoCarouselPage';
import ModalPage from '../docs/ModalPage';
import ModalEventsPage from '../docs/ModalEventsPage';
import ModalExamplesPage from '../docs/ModalExamplesPage';
import ModalFormsPage from '../docs/ModalFormsPage';
import ModalStylesPage from '../docs/ModalStylesPage';
import FormsPage from '../docs/FormsPage';
import SearchPage from '../docs/SearchPage';
import ValidationPage from '../docs/ValidationPage';
import FooterPage from '../docs/FooterPage';
import SliderPage from '../docs/SliderPage';
import TabsPage from '../docs/TabsPage';
import VideoPage from '../docs/VideoPage';

// removeIf(free)
import NotificationsPage from '../docs/pro/NotificationsPage';
import AutocompletePage from '../docs/pro/AutocompletePage';
import CardProPage from '../docs/pro/CardProPage';
import CardExtendedPage from '../docs/pro/CardExtendedPage';
import CarouselProPage from '../docs/pro/CarouselProPage';
import ChatPage from '../docs/pro/ChatPage';
import ChipsPage from '../docs/pro/ChipsPage';
import DropdownProPage from '../docs/pro/DropdownProPage';
import DoubleNavigationPage from '../docs/pro/DoubleNavigationPage';
import ChartProPage from '../docs/pro/ChartProPage';
import GalleryPage from '../docs/pro/GalleryPage';
import GradientProPage from '../docs/pro/GradientProPage';
import HamburgerMenuPagePro from '../docs/pro/HamburgerMenuPagePro';
import ProgressBarsProPage from '../docs/pro/ProgressBarsProPage';
import TabsPagePro from '../docs/pro/TabsPage';
import PillsPage from '../docs/pro/PillsPage';
import SideNavPage from '../docs/pro/SideNavPage';
import ButtonProPage from '../docs/pro/ButtonProPage';
import AccordionProPage from '../docs/pro/AccordionProPage';
import ScrollSpyPage from '../docs/pro/ScrollSpyPage';
import SelectPage from '../docs/pro/SelectPage';
import ModalExamplesProPage from '../docs/pro/ModalExamplesProPage';
import ModalFormsProPage from '../docs/pro/ModalFormsProPage';
import MultiselectPage from '../docs/pro/MultiselectPage';
import SliderProPage from '../docs/pro/SliderProPage';
import InputsProPage from '../docs/pro/InputsPage';
import DatePickerPage from '../docs/pro/DatePickerPage';
import TimePickerPage from '../docs/pro/TimePickerPage';
import LightboxPage from '../docs/pro/LightboxPage';
import MegaMenuPage from '../docs/pro/MegaMenuPage';
import StreakPage from '../docs/pro/StreakPage';
import MultiCarouselPage from '../docs/pro/MultiCarouselPage';
import TimelinePage from '../docs/pro/TimelinePage';
import ThumbnailsCarouselPage from '../docs/pro/ThumbnailsCarouselPage';
import ScrollbarPage from '../docs/pro/ScrollbarPage';
import StickyPage from '../docs/pro/StickyPage';
import FormsPagePro from '../docs/pro/FormsPage';
import StepperPage from '../docs/pro/StepperPage';
import SearchPagePro from '../docs/pro/SearchProPage';
import FooterPagePro from '../docs/pro/FooterProPage';
import SectionsPage from '../docs/pro/sections/SectionsPage';
import BlogPage from '../docs/pro/sections/BlogPage';
import FeaturesPage from '../docs/pro/sections/FeaturesPage';
import TestimonialsPage from '../docs/pro/sections/TestimonialsPage';
import TestimonialsMultiPage from '../docs/pro/sections/TestimonialsMultiPage';
import TeamPage from '../docs/pro/sections/TeamPage';
import ProjectsPage from '../docs/pro/sections/ProjectsPage';
import SocialPage from '../docs/pro/sections/SocialPage';
import MagazinePage from '../docs/pro/sections/MagazinePage';
import EcommercePage from '../docs/pro/sections/EcommercePage';
import ContactPage from '../docs/pro/sections/ContactPage';
import AppPage from '../docs/pro/sections/AppPage';
import ClassicFormPage from '../docs/pro/sections/ClassicFormPage';
import ContactFormPage from '../docs/pro/sections/ContactFormPage';
import VideoBackgroundPage from '../docs/pro/sections/VideoBackgroundPage';
import TableEditablePage from '../docs/pro/TableEditablePage';
import VideoProPage from '../docs/pro/VideoProPage';
// endRemoveIf(free)

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    // CATEGORIES
    {
      path: '/css',
      name: 'CSSPage',
      component: CSSPage
    }, {
      path: '/components',
      name: 'ComponentsPage',
      component: ComponentsPage
    }, {
      path: '/advanced',
      name: 'AdvancedPage',
      component: AdvancedPage
    },
    {
      path: '/navigation',
      name: 'NavigationMenuPage',
      component: NavigationMenuPage
    },
    {
      path: '/forms',
      name: 'FormsMenuPage',
      component: FormsMenuPage
    },
    {
      path: '/tables',
      name: 'TablesPage',
      component: TablesPage
    },
    {
      path: '/modals',
      name: 'ModalsPage',
      component: ModalsPage
    },
    {
      path: '/plugins',
      name: 'AddonsPage',
      component: AddonsPage
    },

    // FREE
    {
      path: '/advanced/accordion',
      name: 'AccordionPage',
      component: AccordionPage
    }, {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    }, {
      path: '/css/background',
      name: 'BackgroundImagePage',
      component: BackgroundImagePage
    }, {
      path: '/css/gradient',
      name: 'GradientPage',
      component: GradientPage
    }, {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    }, {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage
    }, {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage
    }, {
      path: '/navigation/hamburger',
      name: 'HamburgerMenuPage',
      component: HamburgerMenuPage
    }, {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/css/table-additional',
      name: 'TableAdditionalPage',
      component: TableAdditionalPage
    }, {
      path: '/tables/datatable',
      name: 'DataTablePage',
      component: DataTablePage
    }, {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {
      path: '/tables/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    }, {
      path: '/advanced/maps',
      name: 'GoogleMapsPage',
      component: GoogleMapsPage
    }, {
      path: '/css/table-responsive',
      name: 'TableResponsviePage',
      component: TableResponsivePage
    }, {
      path: '/tables/table-search',
      name: 'TableSearchPage',
      component: TableSearchPage
    }, {
      path: '/tables/table-sort',
      name: 'TableSortPage',
      component: TableSortPage
    }, {
      path: '/tables/table-scroll',
      name: 'TableScrollPage',
      component: TableScrollPage
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/css/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/advanced/carousel',
      name: 'CarouselPage',
      component: CarouselPage
    }, {
      path: '/navigation/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/css/hover',
      name: 'HoverPagePage',
      component: HoverPage
    }, {
      path: '/css/icons',
      name: 'FaPage',
      component: FaPage
    }, {
      path: '/forms/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    }, {
      path: '/navigation/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }, {
      path: '/navigation/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    }, {
      path: '/components/alert',
      name: 'AlertPage',
      component: AlertPage
    }, {
      path: '/advanced/collapse',
      name: 'CollapsePage',
      component: CollapsePage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
      path: '/advanced/chart',
      name: 'ChartPage',
      component: ChartPage
    }, {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    }, {
      path: '/advanced/tooltip',
      name: 'TooltipPage',
      component: TooltipPage
    }, {
      path: '/advanced/popover',
      name: 'PopoverPage',
      component: PopoverPage
    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    }, {
      path: '/css/masks',
      name: 'MasksPage',
      component: MasksPage
    }, {
      path: '/forms/validation',
      name: 'ValidationPage',
      component: ValidationPage
    }, {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    }, {
      path: '/modals/modal',
      name: 'ModalPage',
      component: ModalPage
    }, {
      path: '/modals/events',
      name: 'ModalEventsPage',
      component: ModalEventsPage
    }, {
      path: '/modals/examples',
      name: 'ModalExamplesPage',
      component: ModalExamplesPage
    }, {
      path: '/modals/forms',
      name: 'ModalFormsPage',
      component: ModalFormsPage
    }, {
      path: '/modals/styles',
      name: 'ModalStylesPage',
      component: ModalStylesPage
    }, {
      path: '/components/slider',
      name: 'SliderPage',
      component: SliderPage
    }, {
      path: '/forms/forms',
      name: 'FormsPage',
      component: FormsPage
    }, {
      path: '/forms/search',
      name: 'SearchPage',
      component: SearchPage
    }, {
      path: '/navigation/footer',
      name: 'FooterPage',
      component: FooterPage
    }, {
      path: '/components/tabs',
      name: 'TabsPage',
      component: TabsPage
    }, {
      path: '/plugins/video',
      name: 'VideoPage',
      component: VideoPage
    },

    // removeIf(free)
    {
      path: '/advanced/pro/notify',
      name: 'NotificationsPage',
      component: NotificationsPage
    },{
      path: '/forms/pro/autocomplete',
      name: 'AutocompletePage',
      component: AutocompletePage
    },{
      path: '/components/pro/card',
      name: 'CardProPage',
      component: CardProPage
    }, {
      path: '/components/pro/card-extended',
      name: 'CardExtendedPage',
      component: CardExtendedPage
    }, {
      path: '/advanced/pro/carousel',
      name: 'CarouselProPage',
      component: CarouselProPage
    }, {
      path: '/plugins/pro/chat',
      name: 'ChatPage',
      component: ChatPage
    }, {
      path: '/components/pro/slider',
      name: 'SliderProPage',
      component: SliderProPage
    }, {
      path: '/plugins/pro/streak',
      name: 'StreakPage',
      component: StreakPage
    }, {
      path: '/components/pro/chips',
      name: 'ChipsPage',
      component: ChipsPage
    }, {
      path: '/components/pro/dropdown',
      name: 'DropdownProPage',
      component: DropdownProPage
    }, {
      path: '/navigation/pro/double-navigation',
      name: 'DoubleNavigationPage',
      component: DoubleNavigationPage
    }, {
      path: '/advanced/pro/chart',
      name: 'ChartProPage',
      component: ChartProPage
    }, {
      path: '/advanced/pro/gallery',
      name: 'GalleryPage',
      component: GalleryPage
    }, {
      path: '/css/pro/gradient',
      name: 'GradientProPage',
      component: GradientProPage
    }, {
      path: '/navigation/pro/hamburger',
      name: 'HamburgerMenuPagePro',
      component: HamburgerMenuPagePro
    }, {
      path: '/components/pro/progress-bars-pro',
      name: 'ProgressBarsProPage',
      component: ProgressBarsProPage
    }, {
      path: '/components/pro/tabs',
      name: 'TabsPagePro',
      component: TabsPagePro
    }, {
      path: '/components/pro/pills',
      name: 'PillsPage',
      component: PillsPage
    }, {
      path: '/components/pro/button',
      name: 'ButtonProPage',
      component: ButtonProPage
    }, {
      path: '/advanced/pro/accordion',
      name: 'AccordionProPage',
      component: AccordionProPage
    }, {
      path: '/navigation/pro/scrollspy',
      name: 'ScrollSpyPage',
      component: ScrollSpyPage
    }, {
      path: '/forms/pro/select',
      name: 'SelectPage',
      component: SelectPage
    }, {
      path: '/modals/pro/examples',
      name: 'ModalExamplesProPage',
      component: ModalExamplesProPage
    }, {
      path: '/modals/pro/forms',
      name: 'ModalFormsProPage',
      component: ModalFormsProPage
    }, {
      path: '/forms/pro/multiselect',
      name: 'MultiselectPage',
      component: MultiselectPage
    }, {
      path: '/forms/pro/inputs',
      name: 'InputsProPage',
      component: InputsProPage
    }, {
      path: '/advanced/pro/lightbox',
      name: 'LightboxPage',
      component: LightboxPage
    }, {
      path: '/navigation/pro/megamenu',
      name: 'MegaMenuPage',
      component: MegaMenuPage
    }, {
      path: '/advanced/pro/multicarousel',
      name: 'MultiCarouselPage',
      component: MultiCarouselPage
    }, {
      path: '/advanced/pro/thumbnailscarousel',
      name: 'ThumbnailsCarouselPage',
      component: ThumbnailsCarouselPage
    }, {
      path: '/advanced/pro/scrollbar',
      name: 'ScrollbarPage',
      component: ScrollbarPage
    }, {
      path: '/navigation/pro/sidenav',
      name: 'SideNavPage',
      component: SideNavPage
    }, {
      path: '/advanced/pro/sticky',
      name: 'Sticky',
      component: StickyPage
    }, {
      path: '/advanced/pro/datepicker',
      name: 'DatePickerPage',
      component: DatePickerPage
    }, {
      path: '/plugins/pro/timeline',
      name: 'TimelinePage',
      component: TimelinePage
    }, {
      path: '/advanced/pro/timepicker',
      name: 'TimePickerPage',
      component: TimePickerPage
    }, {
      path: '/forms/pro/forms',
      name: 'FormsPagePro',
      component: FormsPagePro
    }, {
      path: '/forms/pro/search',
      name: 'SearchPagePro',
      component: SearchPagePro
    }, {
      path: '/components/pro/stepper',
      name: 'StepperPage',
      component: StepperPage
    }, {
      path: '/navigation/pro/footer',
      name: 'FooterPagePro',
      component: FooterPagePro
    }, {
      path: '/tables/pro/table-editable',
      name: 'TableEditablePage',
      component: TableEditablePage
    }, {
      path: '/sections',
      name: 'SectionsPage',
      component: SectionsPage
    }, {
      path: '/sections/blog',
      name: 'BlogPage',
      component: BlogPage
    }, {
      path: '/sections/features',
      name: 'FeaturesPage',
      component: FeaturesPage
    }, {
      path: '/sections/testimonials',
      name: 'TestimonialsPage',
      component: TestimonialsPage
    }, {
      path: '/sections/testimonials-multi',
      name: 'TestimonialsMultiPage',
      component: TestimonialsMultiPage
    }, {
      path: '/sections/team',
      name: 'TeamPage',
      component: TeamPage
    }, {
      path: '/sections/projects',
      name: 'ProjectsPage',
      component: ProjectsPage
    }, {
      path: '/sections/social',
      name: 'SocialPage',
      component: SocialPage
    }, {
      path: '/sections/magazine',
      name: 'MagazinePage',
      component: MagazinePage
    }, {
      path: '/sections/e-commerce',
      name: 'EcommercePage',
      component: EcommercePage
    }, {
      path: '/sections/contact',
      name: 'ContactPage',
      component: ContactPage
    }, {
      path: '/sections/contactform',
      name: 'ContactFormPage',
      component: ContactFormPage
    }, {
      path: '/sections/app',
      name: 'AppPage',
      component: AppPage
    }, {
      path: '/sections/classic',
      name: 'ClassicFormPage',
      component: ClassicFormPage
    }, {
      path: '/sections/video',
      name: 'VideoBackgroundPage',
      component: VideoBackgroundPage
    }, {
      path: '/plugins/pro/video',
      name: 'VideoProPage',
      component: VideoProPage
    }
    // endRemoveIf(free)
  ]
});
