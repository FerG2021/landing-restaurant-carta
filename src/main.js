import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";

//
// PRIME VUE
//

// PrimeVue Components
// import 'primevue/resources/themes/saga-blue/theme.css'        //theme
// import "primevue/resources/themes/lara-dark-blue/theme.css"; //theme
// import "primevue/resources/primevue.min.css"; //core css
// import "primeicons/primeicons.css";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// prime flex
import "primeflex/primeflex.css";

// InputText
import InputText from "primevue/inputtext";

// MenuBar
import Menubar from "primevue/menubar";

// Divider
import Divider from "primevue/divider";

// Dropdown
import Dropdown from "primevue/dropdown";

// Card
import Card from "primevue/card";

// Button
import Button from "primevue/button";

// Accordion
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

// Carousel
import Carousel from "primevue/carousel";

// Timeline
import Timeline from "primevue/timeline";

// ProgressBar
import ProgressBar from "primevue/progressbar";

// InputNumber
import InputNumber from "primevue/inputnumber";

// modal confirmacion
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmationService from "primevue/confirmationservice";

// modal dinamico
import DynamicDialog from "primevue/dynamicdialog";
import DialogService from "primevue/dialogservice";

// modal
import Dialog from "primevue/dialog";

// Toast
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

// ProgressSpinner
import ProgressSpinner from "primevue/progressspinner";

// Rating
import Rating from "primevue/rating";

// Textarea
import Textarea from "primevue/textarea";

// Image
import Image from "primevue/image";

// TiredMenu
import TieredMenu from "primevue/tieredmenu";

// ListBox
import Listbox from "primevue/listbox";

// importamos las rutas
import router from "./router/index.js";

// vuex
import { createStore } from "vuex";

// animated.css
import "animate.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// Create a new store instance.
const store = createStore({
  state: {
    idioma: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});

createApp(App)
  .component("InputText", InputText)
  .component("Menubar", Menubar)
  .component("Divider", Divider)
  .component("Dropdown", Dropdown)
  .component("Card", Card)
  .component("Button", Button)
  .component("Accordion", Accordion)
  .component("AccordionTab", AccordionTab)
  .component("Carousel", Carousel)
  .component("Timeline", Timeline)
  .component("ProgressBar", ProgressBar)
  .component("InputNumber", InputNumber)
  .component("ConfirmDialog", ConfirmDialog)
  .component("DynamicDialog", DynamicDialog)
  .component("Toast", Toast)
  .component("ProgressSpinner", ProgressSpinner)
  .component("Dialog", Dialog)
  .component("Rating", Rating)
  .component("Textarea", Textarea)
  .component("Image", Image)
  .component("TieredMenu", TieredMenu)
  .component("Listbox", Listbox)

  .use(router)
  .use(PrimeVue, {
    locale: {
      startsWith: "Starts with",
      contains: "Contains",
      notContains: "Not contains",
      endsWith: "Ends with",
      equals: "Equals",
      notEquals: "Not equals",
      noFilter: "No Filter",
      lt: "Less than",
      lte: "Less than or equal to",
      gt: "Greater than",
      gte: "Greater than or equal to",
      dateIs: "Date is",
      dateIsNot: "Date is not",
      dateBefore: "Date is before",
      dateAfter: "Date is after",
      clear: "Clear",
      apply: "Apply",
      matchAll: "Match All",
      matchAny: "Match Any",
      addRule: "Add Rule",
      removeRule: "Remove Rule",
      accept: "Aceptar",
      reject: "Cancelar",
      choose: "Choose",
      upload: "Upload",
      cancel: "Cancel",
      completed: "Completed",
      pending: "Pending",
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      chooseYear: "Choose Year",
      chooseMonth: "Choose Month",
      chooseDate: "Choose Date",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      prevHour: "Previous Hour",
      nextHour: "Next Hour",
      prevMinute: "Previous Minute",
      nextMinute: "Next Minute",
      prevSecond: "Previous Second",
      nextSecond: "Next Second",
      am: "am",
      pm: "pm",
      today: "Today",
      weekHeader: "Wk",
      firstDayOfWeek: 0,
      dateFormat: "mm/dd/yy",
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
      passwordPrompt: "Enter a password",
      emptyFilterMessage: "No results found", // @deprecated Use 'emptySearchMessage' option instead.
      searchMessage: "{0} results are available",
      selectionMessage: "{0} items selected",
      emptySelectionMessage: "No selected item",
      emptySearchMessage: "No results found",
      emptyMessage: "No available options",
      aria: {
        trueLabel: "True",
        falseLabel: "False",
        nullLabel: "Not Selected",
        star: "1 star",
        stars: "{star} stars",
        selectAll: "All items selected",
        unselectAll: "All items unselected",
        close: "Close",
        previous: "Previous",
        next: "Next",
        navigation: "Navigation",
        scrollTop: "Scroll Top",
        moveTop: "Move Top",
        moveUp: "Move Up",
        moveDown: "Move Down",
        moveBottom: "Move Bottom",
        moveToTarget: "Move to Target",
        moveToSource: "Move to Source",
        moveAllToTarget: "Move All to Target",
        moveAllToSource: "Move All to Source",
        pageLabel: "{page}",
        firstPageLabel: "First Page",
        lastPageLabel: "Last Page",
        nextPageLabel: "Next Page",
        prevPageLabel: "Previous Page",
        rowsPerPageLabel: "Rows per page",
        jumpToPageDropdownLabel: "Jump to Page Dropdown",
        jumpToPageInputLabel: "Jump to Page Input",
        selectRow: "Row Selected",
        unselectRow: "Row Unselected",
        expandRow: "Row Expanded",
        collapseRow: "Row Collapsed",
        showFilterMenu: "Show Filter Menu",
        hideFilterMenu: "Hide Filter Menu",
        filterOperator: "Filter Operator",
        filterConstraint: "Filter Constraint",
        editRow: "Row Edit",
        saveEdit: "Save Edit",
        cancelEdit: "Cancel Edit",
        listView: "List View",
        gridView: "Grid View",
        slide: "Slide",
        slideNumber: "{slideNumber}",
        zoomImage: "Zoom Image",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        rotateRight: "Rotate Right",
        rotateLeft: "Rotate Left",
      },
    },
  })
  .use(store)
  .use(VueAxios, axios)
  .use(ToastService)
  .use(ConfirmationService)
  .use(DialogService)
  .mount("#app");
