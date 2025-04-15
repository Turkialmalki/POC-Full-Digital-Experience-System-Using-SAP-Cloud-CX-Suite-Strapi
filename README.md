# POC – Full Digital Experience System Using SAP Cloud CX Suite & Strapi CMS 



## 🔐 SAP Customer Data Cloud (CDC)
SAP CDC was explored and prepared for seamless user login and identity management. I configured the screenset, verified token issuance logic, and ensured it would align with PDPL and GDPR regulations.

- 🌍 Cloud Region: `US East (VA)`
- 🔐 Identity Setup: Screenset, SSO, Session Handling

📸 _Screenshot from the BTP cockpit_  
<img width="1720" alt="Screenshot 1446-10-17 at 10 52 03 AM" src="https://github.com/user-attachments/assets/44a86949-77f5-49f9-84d7-6cb2d751e97e" />

---

## 📱 SAP Mobile Services (POC App)
I created a full mobile service instance named `poc-react`, attached backend destinations (like my website), and explored features such as:

- 🔧 App Connectivity
- 🔐 Authentication & Roles
- 🔄 App Versioning
- 🔔 Alerts + Push Notifications

📸 _App Service Features UI_  
<img width="1719" alt="Screenshot 1446-10-17 at 11 27 08 AM" src="https://github.com/user-attachments/assets/5903636f-04ff-4562-8a89-96bed8c4a97e" />

📸 _Destination setup for my backend_  
<img width="1715" alt="Screenshot 1446-10-17 at 11 29 58 AM" src="https://github.com/user-attachments/assets/6a91153e-c02b-4299-b443-8a5de3a4ed54" />

---

## 🔄 SAP Integration Suite
Provisioned and activated the Integration Suite to simulate an end-to-end flow from frontend interaction to CRM or Marketing Cloud systems.

- ✅ Subscribed to the suite
- 🔁 Provisioning Cloud Integration Runtime
- 📡 Prepping iFlows for interaction sync

📸 _Integration provisioning steps_  
<img width="1317" alt="Screenshot 1446-10-17 at 10 57 23 AM" src="https://github.com/user-attachments/assets/ef5408f8-cc45-4689-ae19-81344b0b9e4b" />

📸 _Subscription to Integration Suite_  
<img width="1361" alt="Screenshot 1446-10-17 at 11 03 42 AM" src="https://github.com/user-attachments/assets/d44ba037-5c2e-4076-9a58-789c2ad90f7a" />

---

## 📡 Connectivity with Real Backend
SAP Destination was created linking directly to my personal website `https://www.turkialmalki.com` to demonstrate how content and API services can be exposed securely through SAP Gateway.

📸 _Backend Destination Configuration_  
<img width="1715" alt="Screenshot 1446-10-17 at 11 29 58 AM" src="https://github.com/user-attachments/assets/07ed6abd-4837-40fd-8448-682953f19513" />

---

## 📦 Architecture & Outcome
This PoC demonstrates readiness to:

- Launch integrated customer login
- Create mobile apps managed via SAP
- Sync marketing or CRM tools via Integration Suite
- Deliver scalable and secure customer experience infrastructure

All work done hands-on in SAP BTP, ready to expand to production.

---






## 🧠 Headless CMS Experience: Strapi @ Monshaat

During my time at Monshaat, I led the CMS design and delivery for the Innovation Center platform using **Strapi**, a headless CMS optimized for developer freedom and business flexibility.

This content layer powered all innovation forms, opportunities, public web pages, and even internal innovation challenge workflows.

---

### 🔧 Key Responsibilities & Solutions:
- ✅ Built **30+ dynamic content models** including Programs, Partners, Events, Forms, and Challenges.
- 🧩 Created **nested components**, multilingual fields, and linked relationships to allow rich, structured content.
- 🔐 Implemented **public and private API roles** with fine-grained permission management.
- 🌍 Integrated **content APIs** into the frontend (React/Next.js) to display innovation opportunities, videos, and banners.
- 🎯 Supported the innovation journey from **idea submission → form validation → program enrollment.**

---

### 📸 Visual Implementation Highlights:

#### 🗃 Collection Example: AI Form
Used for managing submissions from entrepreneurs and innovators.
![ai-form](/uploads/Screenshot 1446-10-17 at 12.29.23 PM.png)
<img width="1728" alt="Screenshot 1446-10-17 at 12 29 23 PM" src="https://github.com/user-attachments/assets/593d1e0c-2375-440b-91e8-82b2facd10de" />

---

#### 📋 Program Form Records
Custom form handling for various workshops and live sessions across Riyadh and Al Khobar.
![program-form](/uploads/Screenshot 1446-10-17 at 12.29.53 PM.png)
<img width="1719" alt="Screenshot 1446-10-17 at 12 29 53 PM" src="https://github.com/user-attachments/assets/e8e3cc2c-664a-4315-a0a0-94b4c90052d2" />

---

#### 🧾 Editable Landing Page
One of many single-type content structures – powering the English homepage dynamically.
![english-page](/uploads/Screenshot 1446-10-17 at 12.30.30 PM.png)
<img width="1728" alt="Screenshot 1446-10-17 at 12 30 30 PM" src="https://github.com/user-attachments/assets/20f61790-ad00-46b5-b3d0-ab54ca219253" />

---

#### 🌐 Public-Facing Innovation Portal
Strapi’s content directly consumed to generate opportunity cards and status trackers.
![frontend-result](/uploads/Screenshot 1446-10-17 at 12.31.23 PM.png)
<img width="1627" alt="Screenshot 1446-10-17 at 12 31 23 PM" src="https://github.com/user-attachments/assets/a8275739-75d7-4625-a18e-71acc5b734e2" />

---

#### 🧱 Component-Based Content Modeling
Each challenge had flexible, reusable content blocks, banners, and partner references.
![content-builder](/uploads/Screenshot 1446-10-17 at 12.31.51 PM.png)
<img width="1728" alt="Screenshot 1446-10-17 at 12 31 51 PM" src="https://github.com/user-attachments/assets/bb9f03ab-1147-4069-8fce-c0366c12defe" />

---

#### 🔐 Permission Configuration (Public API Role)
Controlled API access to ensure security for guest and authenticated views.
![permissions](/uploads/Screenshot 1446-10-17 at 12.32.20 PM.png)
<img width="1689" alt="Screenshot 1446-10-17 at 12 32 20 PM" src="https://github.com/user-attachments/assets/a9583908-44a2-41c6-922e-04943a85a5de" />

---

### 🧠 Key Takeaways
> This project demonstrates my ability to **design and scale complex CMS infrastructures** that empower non-technical teams, reduce developer dependency, and integrate seamlessly with frontend apps and innovation workflows.

---

### 📌 Why This Matters for Ceer:
- ✅ I've already delivered CMS systems at scale with real business users and governance
- ✅ I can **bridge CMS with SAP CDC** or Marketing tools for personalized, role-aware content
- ✅ Experience in both **enterprise and open-source ecosystems** gives me flexibility to choose what fits the goal best
