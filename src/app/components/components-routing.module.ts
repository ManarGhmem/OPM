import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { LayoutComponent } from "../layout/original-layout/layout.component";
import { NotfoundComponent } from "../pages/notfound/notfound.component";



const routes: Routes = [
  {
    path: "app",
    component: LayoutComponent,
    canActivateChild:[AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      
      {
        path: "employers",
        loadChildren: () =>
          import("../components/employers/employers.module").then(
            (m) => m.EmployersModule
          ),
      },
      {
        path: "company",
        loadChildren: () =>
          import("../components/companies/companies.module").then(
            (m) => m.CompaniesModule
          ),
      },
      {
        path: "folders",
        loadChildren: () =>
          import("../components/foldres/foldres.module").then(
            (m) => m.FoldresModule
          ),
      },
      {
        path: "tickets",
        loadChildren: () =>
          import("../components/tickets-adm/tickets-adm.module").then(
            (m) => m.TicketsAdmModule
          ),
      },


      
      // {
      //   path: "dashAdminCli/:id/:folderName/:clientName",
      //   loadChildren: () =>
      //     import("../components/dash-admin-clint-stat/dash-admin-clint-stat.module").then(
      //       (m) => m.DashAdminClintStatModule
      //     ),
      // },






      {
        path: "ClientDashboardWok",
        loadChildren: () =>
          import("../components/dash-client-job/dash-client-job.module").then(
            (m) => m.DashClientJobModule
          ),
      },
      {
        path: "workOrderDetails",
        loadChildren: () =>
          import("../components/wodt/wodt.module").then(
            (m) => m.WODTModule
          ),
      },
      {
        path: "workOrderDetailsAdmin/:id",
        loadChildren: () =>
          import("../components/workordersdetailsadmin/workordersdetailsadmin.module").then(
            (m) => m.WorkordersdetailsadminModule
          ),
      },
      {
        path: "followUpsDetails/:id",
        loadChildren: () =>
          import("../components/followups-detailes/followups-detailes.module").then(
            (m) => m.FollowupsDetailesModule
          ),
      },
      //
      // {
      //   path: "ticketDetail/:id",
      //   loadChildren: () =>
      //     import("../components/ticket-details-admin/ticket-details-admin.module").then(
      //       (m) => m.TicketDetailsAdminModule
      //     ),
      // },


      {
        path: "filesDetail/:id",
        loadChildren: () =>
          import("../components/files-details-admin/files-details-admin.module").then(
            (m) => m.FilesDetailsAdminModule
          ),
      },
      {
        path: "partOrderDetail/:id",
        loadChildren: () =>
          import("../components/part-order-details-admin/part-order-details-admin-routing.module").then(
            (m) => m.PartOrderDetailsAdminRoutingModule
          ),
      },


      {
        path: "workOrderDetail/:id/:folderName/:clientName",
        loadChildren: () =>
          import("../components/work-order-details-admin/work-order-details-admin.module").then(
            (m) => m.WorkOrderDetailsAdminModule
          ),
      },
      
      {
        path: "UnhandledWorkOrdersDetailAdmin/:id",
        loadChildren: () =>
          import("../components/unhandled-work-orders-detail-admin/unhandled-work-orders-detail-admin.module").then(
            (m) => m.UnhandledWorkOrdersDetailAdminModule
          ),
      },
      
      {
        path: "addWorekorder/:id",
        loadChildren: () =>
          import("../components/wodt/wodt.module").then(
            (m) => m.WODTModule
          ),
      },

      {
        path: "updateWorekOrder/:id",
        loadChildren: () =>
          import("../components/wodt/wodt.module").then(
            (m) => m.WODTModule
          ),
      },
      {
        path: "workorderListTechClt",
        loadChildren: () =>
          import("../components/tech-workorder/tech-workorder.module").then(
            (m) => m.TechWorkorderModule
          ),
      },
      {
        path: "listWorkOrdersClient",
        loadChildren: () =>
          import("../components/work-order-from-client-list/work-order-from-client-list.module").then(
            (m) => m.WorkOrderFromClientListModule
          ),
      },
      {
        path: "partOrderClinet",
        loadChildren: () =>
          import("../components/part-order-client-list/part-order-client-list.module").then(
            (m) => m.PartOrderClientListModule
          ),
      },
      {
        path: "partOrderAdmin/:id",
        loadChildren: () =>
          import("../components/part-order-details-admin/part-order-details-admin.module").then(
            (m) => m.PartOrderDetailsAdminModule
          ),
      },
      {
        path: "listClientPartOrder",
        loadChildren: () =>
          import("../components/list-client-part-order-lis/list-client-part-order-lis.module").then(
            (m) => m.ListClientPartOrderLisModule
          ),
      },
      {
        path: "mangeContract",
        loadChildren: () =>
          import("../components/contract-users/contract-users.module").then(
            (m) => m.ContractUsersModule
          ),
      },



      // {partOrderDetail
      //   path: "expenses-sales",
      //   children: [
      //     {
      //       path: 'transactions',
      //       loadChildren: () => import('./expenses/transactions/transactions.module').then(m => m.TransactionsModule)
      //     },
      //     {
      //       path: 'products-services',
      //       loadChildren: () => import('./expenses/prodserv/prodserv.module').then(m => m.ProdservModule)
      //     },
      //     {
      //       path: 'suppliers',
      //       loadChildren: () => import('./expenses/suppliers/suppliers.module').then(m => m.SuppliersModule)
      //     },
      //     {
      //       path: 'customers',
      //       loadChildren: () => import('./expenses/customers/customers.module').then(m => m.CustomersModule)
      //     },
      //   ]
      // },

      // {
      //   path: "redirection/:refreshToken",
      //   loadChildren: () =>
      //     import("./redirection/redirection.module").then(
      //       (m) => m.RedirectionModule
      //     ),
      // },

    ],
  },

  {
    path: "app",
    children: [
      {
        path: "redirection/:refreshToken",
        loadChildren: () =>
          import("./redirection/redirection.module").then(
            (m) => m.RedirectionModule
          ),
      },

    ],
  },

  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotfoundComponent,
  },



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[AuthGuard],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

