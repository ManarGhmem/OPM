import { environment } from "../../environments/environment";
//dhasbored 
// export const GET_DASHBORD_WORKORDER_STATUS_BY_VALID_END_POINT: string = `${environment.apiUrl}/employee/getAllEmployeesByValid`;
// export const GET_USERDASHBORD_EMPLOYES_BY_VALID_END_POINT: string = `${environment.apiUrl}/employee/getAllEmployeesByValid`;
export const GET_DASHBORD_CONTRACT_END_POINT: string = `${environment.apiUrl}/count/countContracts`;
export const GET_USER_BY_AUTHORTY_END_POINT: string = `${environment.apiUrl}/count/countUsersByAuthority`;
export const GET_USER_ALL_EMPLOYEES_END_POINT: string = `${environment.apiUrl}/count/countEmployees`;
export const GET_USER_AllWorekOrders_END_POINT: string = `${environment.apiUrl}/count/countWorkOrders`;
export const GET_USER_WOREKORDERS_BY_STATUS_END_POINT: string = `${environment.apiUrl}/count/countWorkOrderByStatus`;
export const GET_USER_COUNT_Ticket_END_POINT: string = `${environment.apiUrl}/count/countAllTiket`;
export const GET_USERUNHANDLING_WORK_ORDERS_END_POINT: string = `${environment.apiUrl}/count/countUnhandledWorkOrder`;
export const GET_WORK_ORDERS_bayStatus_Client_END_POINT: string = `${environment.apiUrl}/count/countWorkOrdersBayClintIdStatus`;
export const GET_Unhandled_WORK_ORDERS__Client_END_POINT: string = `${environment.apiUrl}/count/countUnhandledWorkOrderBayClient`;
export const GET_Technisien_WORK_ORDERS_bay_id_END_POINT: string = `${environment.apiUrl}/count/countWorkOrderByEmployeeId`;

export const GET_WORK_ORDERS_bay_CLIENT_id_END_POINT: string = `${environment.apiUrl}/count/countAllWorekOrderBayClient`;

// count/   
export const GET_USER_By_ID_END_POINT: string = `${environment.apiUrl}/user/getUserByIdByAuthority`;

// part order 
export const GET_LIST_CLINT_PART_ORDERS_All: string = `${environment.apiUrl}/workOrder/getUnhandledClients`;





//AUTH ENDPOINTS
export const SIGNIN_END_POINT: string = `${environment.apiUrl}/login`;
export const SIGNUP_END_POINT: string = `${environment.apiUrl}/register`;
export const USER_LOGOUT_END_POINT: string = `${environment.apiUrl}/logout`;
//Update ENDPOINTS
export const UPDATE_PAGE_END_POINT: string = `${environment.apiUrl}/client/updateClient `;


//employers
export const GET_USER_employers_END_POINT: string = `${environment.apiUrl}/employee/getAllEmployeesByAuthority`;
export const GET_USER_employers_BY_VALID_END_POINT: string = `${environment.apiUrl}/employee/getAllEmployeesByValid`;
export const PUT_USER_USER_employers_BY_VALIDE: string = `${environment.apiUrl}/employee/updateEmployee`;


//*****company******* */
export const GET_LIST_CLIENTS_BAY_Type : string = `${environment.apiUrl}/client/getAllClientsByValid`;
export const GET_LIST_CLIENTS_All : string = `${environment.apiUrl}/client/all`;
export const PUT_USER_USER_CLIENTS_BY_VALIDE: string = `${environment.apiUrl}/client/updateClient`;
// **********************folowups*********
export const PUT_followUps_END_POINT: string = `${environment.apiUrl}/followUp/updateFollowUp`;
export const POST_TICKET_follow_END_POINT: string = `${environment.apiUrl}/followUp/addTicket`;
export const GET_FolloWUpsBYID : string = `${environment.apiUrl}/followUp/getOneFollowUpBayId`;

//********admin********** */
export const GET_LIST_FOLDERS_All: string = `${environment.apiUrl}/folder/all`;
export const GET_LIST_Ticket_BY_CLIENTS: string = `${environment.apiUrl}/ticket/getTicketByClientId`;
export const GET_LIST_FILES_BY_CLIENTS: string = `${environment.apiUrl}/folder/getFilesByclientId`;
export const GET_LIST_Work_Orders_BY_CLIENTS: string = `${environment.apiUrl}/workOrder/getWorkOrderByClientId`;
export const POST_FOLLOWUP: string = `${environment.apiUrl}/workOrder/addFollowUp`;

// getUnhandledWorkOrders
// ***********static for admi for users ************ */
export const GET_USER_COUNT_tickrt_END_POINT: string = `${environment.apiUrl}/ticket/countTIcketsByClientId`;
export const GET_USER_COUNT_files_BY_VALID_END_POINT: string = `${environment.apiUrl}/folder/countFilesByClientId`;
export const GET_USER_USER_COUNT_worekorder_BY_VALIDE: string = `${environment.apiUrl}/workOrder/countWorkOrderByClientId`;

// ********* worek order ******/

export const POST_WOREK_ORDER_ADMIN_END_POINT: string = `${environment.apiUrl}/workOrder/createWorkOrder`;
export const PUT_WOREK_ORDER_END_POINT: string = `${environment.apiUrl}/workOrder/updateWorkOrder`;
export const DELETE_USER_WORK_ORDER_END_POINT: string = `${environment.apiUrl}/workOrder/deleteWorkOrder`;
export const GET_USER_WORK_ORDER_BY_STATUS_END_POINT: string = `${environment.apiUrl}/workOrder/getWorkOrderByStatus`;
export const GET_ONE_WORK_ORDER_BY_ID_END_POINT: string = `${environment.apiUrl}/workOrder/getWorkOrderById`;
export const GET_ALL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT: string = `${environment.apiUrl}/workOrder/getUnhandledWorkOrders`;
export const GET_COUNTL_UNHANDLE_WORK_ORDERS_BY_ID_END_POINT: string = `${environment.apiUrl}/workOrder/countUnhandledWorkOrderByClientId`;
export const GET_HANDLED_WORK_ORDERS_BY_ID_END_POINT: string = `${environment.apiUrl}/workOrder/getHandledWorkOrders`;

/*  
127.0.0.1:3000/workOrder/getWorkOrderByStatus/645f74880e0ab8ae87fed835
*/
// mnge ticket for worek order
export const POST_TICKET_ADMIN_END_POINT: string = `${environment.apiUrl}/workOrder/addTicket`;
export const POST_ADD_FILE_FOR_TICKET_ADMIN_END_POINT: string = `${environment.apiUrl}/ticket/ticketAddFile`;
export const DELETE_FILE_FOR_TICKET_ADMIN_END_POINT: string = `${environment.apiUrl}/ticket/ticketRemoveFile`;
export const POST_ADD_FILE_TICKET_ADMIN_END_POINT: string = `${environment.apiUrl}/ticket/ticketAddFile`;
export const PUT_TICKET_END_POINT: string = `${environment.apiUrl}/ticket/updateTicket`;

// worek order part techn
export const GET_WOREK_ORDER_FOR_Te_END_POINT: string = `${environment.apiUrl}/workOrder/getWorkOrderByEmployeeId`;
export const GET_WOREK_ORDER_FOR_TECH_BY_STATUS_END_POINT: string = `${environment.apiUrl}/workOrder/getWorkOrderByEmployeeIdByStatus`;
// 127.0.0.1:3000/workOrder/getWorkOrderByClientId
// 127.0.0.1:3000/workOrder/getWorkOrderByClientIdByStatus

export const GET_WOREK_ORDER_FOR_CLTe_END_POINT: string = `${environment.apiUrl}/workOrder/getWorkOrderByClientId`;
export const GET_WOREK_ORDER_FOR_CLT_BY_STATUS_END_POINT: string = `${environment.apiUrl}/workOrder/getWorkOrderByClientIdByStatus`;

//getWorkOrderByClientIdByStatus


// ****************updatePartOrder**************//
export const VERIFY_ACCOUNT_END_POINT: string = `${environment.apiUrl}/auth/user/validate`;
export const RESET_VERIFY_EMAIL_END_POINT: string = `${environment.apiUrl}/auth/user/verify/reset/email`;
export const RESET_VERIFY_CODE_END_POINT: string = `${environment.apiUrl}/auth/user/verify/reset/code`;
export const RESET_PASSWORD_END_POINT: string = `${environment.apiUrl}/auth/user/reset/password`;
export const GET_USER_REFRESH_TOKEN_END_POINT: string = `${environment.apiUrl}/auth/user/refresh`;

//DASHBOARD ENDPOINTS
export const USER_DASHBOARD_END_POINT: string = `${environment.apiUrl}/dashboard/get`;


//PartOreedr ENDPOINTS  
export const GET_CONTRACT_END_POIN: string = `${environment.apiUrl}/contract/all`;
export const PUT_Contract_END_POINT: string = `${environment.apiUrl}/contract/test`;



export const GET_PART_ORDER_BY_CLIENT_ID_END_POIN: string = `${environment.apiUrl}/partOrder/getPartOrderByClientId`;
export const GET_USER_HAVE_PART_ORDER_END_POIN: string = `${environment.apiUrl}/partOrder/getClientsHavingPartOrders`;
export const POST_PART_ORDER_END_POINT: string = `${environment.apiUrl}/partOrder/createPartOrder`;
export const PUT_PART_ORDER_END_POINT: string = `${environment.apiUrl}/partOrder/updatePartOrder`;
export const DELETE_PART_ORDER_END_POINT: string = `${environment.apiUrl}/partOrder/deletePartOrder`;
export const GET_PART_ORDER_BY_CLIENTSTATUS_ID_END_POIN: string = `${environment.apiUrl}/partOrder/getPartOrderByStatus`;
export const POST_PART_ADD_FILE_TO_PART_ORDER_END_POIN: string = `${environment.apiUrl}/partOrder/addFile`;

// export const USER_DASHBOARD_END_POINT: string = `${environment.apiUrl}/dashboard/get`;    



