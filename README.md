# Portfolio

A modern, responsive, and high-performance developer portfolio built with industry-best practices in frontend architecture and design. This project showcases not only my work and skills—but also my approach to building scalable, maintainable, and user-friendly web applications.

## Technologies Used

* **React** — Declarative UI built with a component-based architecture  
* **TypeScript** — Full type safety for robust, error-resistant code  
* **MUI (Material UI)** — Beautiful, themeable components following Material Design principles  
* **Redux** (with Redux Toolkit) — Predictable global state management (e.g., theme, UI state)  
* **Feature-Sliced Design (FSD)** — Scalable, layered architecture with clear separation of concerns  
* **React Bits** — Reusable, composable UI patterns and utility components for consistency and rapid iteration

## Project Structure (FSD)

The codebase follows the **Feature-Sliced Design** methodology for long-term maintainability:

```
src/
├── app/ # Application core (store, routing, providers)
├── pages/ # Page-level compositions
├── widgets/ # Complex UI blocks
├── features/ # Business logic units 
├── entities/ # Domain entities
└── shared/ # Reusable across layers
```
This structure enables:

* Easy scaling and onboarding  
* Low coupling between modules  
* Clear code ownership and boundaries  
* Improved testability and refactorability

## Key Features

* **Light/dark theme toggle** with user preference persisted in `localStorage`  
* Fully **responsive design** — optimized for mobile, tablet, and desktop  
* Smooth **animations** and micro-interactions for enhanced UX  


---

> *Built with attention to detail, architectural discipline, and user experience.*