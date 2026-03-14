import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { AuthPage } from "./pages/auth-page";
import { Dashboard } from "./pages/dashboard";
import { UploadDetect } from "./pages/upload-detect";
import { VerificationResults } from "./pages/verification-results";
import { AuthenticationPortal } from "./pages/authentication-portal";
import { CertificatePage } from "./pages/certificate-page";
import { HumanVerification } from "./pages/human-verification";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/upload",
    Component: UploadDetect,
  },
  {
    path: "/results/:id",
    Component: VerificationResults,
  },
  {
    path: "/authenticate",
    Component: AuthenticationPortal,
  },
  {
    path: "/certificate/:id",
    Component: CertificatePage,
  },
  {
    path: "/human-verification",
    Component: HumanVerification,
  },
]);
