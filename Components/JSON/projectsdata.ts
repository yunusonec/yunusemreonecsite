// Replace below project details with your project details. Add all your projects details here as per below object structure, and it will populate it in projects sections.
export const projectsdata = () => [
  {
    title: "Earthquake Information Repository",
    name: "Deprem Bilgi Deposu",
    banner: "/deprem2.jpg",
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Web Development",
      "Public Service"
    ],
    description: `A social responsibility project developed by Bülent Ecevit University Computer Engineering students, designed to provide a central hub for earthquake-related information and raise awareness. This volunteer-based initiative aims to compile all essential earthquake information in one accessible platform, connecting users with official data sources and emergency resources.`,
    //(Optional) Live link of your project, if hosted
    link: null,
    github: null,
    // Logo image of your project
    logo: "/deprem5.jpg",
    features: [
      "Centralized platform for all earthquake-related information, facilitating quick access during emergencies",
      "Real-time data integration from official government institutions and monitoring centers",
      "Interactive maps showing recent earthquake activities and risk zones",
      "Educational resources for earthquake preparedness and safety protocols",
      "Emergency contact information for disaster response organizations",
      "Completely volunteer-based initiative with no data collection or commercial purpose"
    ],
    // Screenshots of your project
    snapshots: [
      "/deprem1.jpg",
      "/deprem2.jpg",
      "/deprem3.jpg",
      "/deprem4.jpg",
      "/deprem5.jpg"
    ],
    height: 1900,
    others: [
      {
        link: "/Projects/2",
        thumbnail: "/traversal/traversal5.jpg",
        logo: "/traversal/traversal1.jpg",
        title: "Traversal Core Projesi",
        description: "ASP.NET Core 5.0 ile geliştirilmiş kapsamlı bir rezervasyon ve tur yönetim sistemi."
      },
      {
        link: "/Projects/3",
        thumbnail: "/signalrqr/signalrqr1.jpg",
        logo: "/signalrqr/signalrqr1.jpg",
        title: "SignalR QR Restaurant",
        description: "ASP.NET Core 6.0 ve SignalR kullanılarak geliştirilen QR kodlu restoran sipariş sistemi."
      }
    ]
  },
  {
    title: "Traversal Rezervasyon Sistemi",
    name: "Traversal Core Projesi",
    banner: "/traversal/traversal1.jpg",
    skills: [
      "C#",
      "ASP.NET Core 5.0",
      "Entity Framework Core",
      "SQL Server",
      "MSSQL",
      "PostgreSQL",
      "N-Tier Architecture",
      "Identity",
      "Repository Pattern",
      "SignalR"
    ],
    description: `A comprehensive travel reservation system developed with ASP.NET Core 5.0 and Entity Framework Core. This project follows N-Tier Architecture principles and implements various design patterns including Repository Pattern, CQRS, and Unit of Work. The system offers complete tour management, user authentication, role-based access control, and real-time features powered by SignalR.`,
    //(Optional) Live link of your project, if hosted
    link: null,
    // Logo image of your project
    logo: "/traversal/traversal1.jpg",
    features: [
      "N-Tier Architecture with Business, Data Access, Entity, and Presentation layers",
      "Destination and tour management with detailed information and gallery",
      "User authentication and role-based authorization using Identity",
      "Admin dashboard with CRUD operations for tours, guides, and reservations",
      "Member dashboard for booking management and profile settings",
      "Real-time visitor statistics with SignalR",
      "Excel and PDF report generation",
      "Email notification system",
      "Multi-language support",
      "Integration with external APIs including Rapid API for hotel listings"
    ],
    // Screenshots of your project
    snapshots: [
      "/traversal/traversal8.jpg",
      "/traversal/traversal2.jpg",
      "/traversal/traversal3.jpg",
      "/traversal/traversal4.jpg",
      "/traversal/traversal5.jpg",
      "/traversal/traversal6.jpg",
    ],
    height: 1900,
    others: [
      {
        link: "/Projects/1",
        thumbnail: "/deprem1.jpg",
        logo: "/deprem5.jpg",
        title: "Deprem Bilgi Deposu",
        description: "A social responsibility project providing earthquake information resources."
      },
      {
        link: "/Projects/3",
        thumbnail: "/signalrqr/signalrqr1.jpg",
        logo: "/signalrqr/signalrqr_logo.jpg",
        title: "SignalR QR Restaurant",
        description: "ASP.NET Core 6.0 ve SignalR kullanılarak geliştirilen QR kodlu restoran sipariş sistemi."
      }
    ]
  },
  {
    title: "QR Code Restaurant Ordering System",
    name: "SignalR QR Restaurant",
    banner: "/signalrqr/signalrqr5.jpg",
    skills: [
      "C#",
      "ASP.NET Core 6.0",
      "SignalR",
      "Web API",
      "Entity Framework Core",
      "MSSQL",
      "N-Tier Architecture",
      "Identity",
      "AutoMapper",
      "MailKit"
    ],
    description: `A modern restaurant ordering system that uses QR codes to enhance the dining experience. Built with ASP.NET Core 6.0 and SignalR, this application allows customers to scan QR codes at restaurant tables, view the menu, add products to their cart, and place orders without any page refreshes. The admin panel displays orders and reservations in real-time using SignalR technology.`,
    //(Optional) Live link of your project, if hosted
    link: null,
    logo: "/signalrqr/signalrqr6.jpg",
    features: [
      "N-Tier Architecture with Business, Data Access, Entity, and DTO layers",
      "Restaurant table management with real-time status updates",
      "QR code scanning to access menu and place orders",
      "Live order tracking and notifications using SignalR",
      "Admin panel for real-time order and reservation management",
      "User authentication and reservation system",
      "Discount creation and management",
      "Email notifications for order status updates",
      "Real-time statistics and reporting",
      "Responsive design for all devices"
    ],
    // Screenshots of your project
    snapshots: [
      "/signalrqr/signalrqr1.jpg",
      "/signalrqr/signalrqr2.jpg",
      "/signalrqr/signalrqr3.jpg",
      "/signalrqr/signalrqr4.jpg",
      "/signalrqr/signalrqr5.jpg",
      "/signalrqr/signalrqr6.jpg"
    ],
    height: 1900,
    others: [
      {
        link: "/Projects/1",
        thumbnail: "/deprem1.jpg",
        logo: "/deprem5.jpg",
        title: "Deprem Bilgi Deposu",
        description: "A social responsibility project providing earthquake information resources."
      },
      {
        link: "/Projects/2",
        thumbnail: "/traversal/traversal1.jpg",
        logo: "/traversal/traversal_logo.jpg",
        title: "Traversal Core Projesi",
        description: "ASP.NET Core 5.0 ile geliştirilmiş kapsamlı bir rezervasyon ve tur yönetim sistemi."
      }
    ]
  }
];
