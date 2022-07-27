import { DefaulTable } from './../components/table/Table';
//----------------------Pages Documents--------------------------

import Index from "../pages/index/Index";
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';

import Information from "../pages/information/Information";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

import { DashboardPage } from "../pages/dashboards/Dashboard";
import { GuidesPage } from "../pages/dashboards/guides/Guides";

//ADMIN DASHBOARD

import Dashboard from "../pages/Admin/Dashboard/Dashboard"
import UserAccount from "../pages/Admin/Users/UserAccount"
//---------------------------------------------------------------

//Layouts Documents
import Navbar from '../components/navbar/Navbar';
import DashboardNavbar from '../components/navbar/DashboardNavbar';
import LoggedAccountNavbar from '../components/navbar/Logged-account-navbar/LoggedAccountNavbar';

import Footer from '../components/footer/Footer';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import { InputDate } from '../components/input/Input';
import { InputFile } from '../components/input/Input';
import Button from '../components/button/Button';
import Select from '../components/select/Select';
import Spinner from '../components/spinner/Spinner';
import { SpinnerSignUp } from '../components/spinner/Spinner';

import { CardSignUp, CardGuides, ValidatePaymentCard } from '../components/card/Card';
import { ValidatePaymentPage } from "../pages/dashboards/validate-payment/ValidatePayment";
import { ValidateAreaPaymentPage } from "../pages/dashboards/validate-area-payment/ValidateAreaPayment";
import AttachValidPaymentPage from '../pages/attach-valid-payment/AttachValidPayment';

//---------------------------------------------------------------

export { UserAccount };

export { Index, Login, SignUp, Information, Contact, Home, GuidesPage, DashboardPage, ValidatePaymentPage, ValidateAreaPaymentPage, AttachValidPaymentPage };

export { Dashboard };

export { Navbar, Form, Input, InputDate, InputFile, Button, Select, Footer, CardSignUp, Spinner, SpinnerSignUp, CardGuides, LoggedAccountNavbar, DashboardNavbar, ValidatePaymentCard, DefaulTable }

