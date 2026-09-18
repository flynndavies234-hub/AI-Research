const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('desktopAPI',{
 getAppInfo:()=>ipcRenderer.invoke('app-info'), saveSettings:x=>ipcRenderer.invoke('save-settings',x),
 checkUpdates:()=>ipcRenderer.invoke('check-updates'),installUpdate:()=>ipcRenderer.invoke('install-update'),
 schoolAsk:x=>ipcRenderer.invoke('school-ask',x), researchAsk:x=>ipcRenderer.invoke('research-ask',x), planAsk:x=>ipcRenderer.invoke('plan-ask',x),
 diagnostics:()=>ipcRenderer.invoke('diagnostics'),clearLogs:()=>ipcRenderer.invoke('clear-logs'),onUpdateStatus:fn=>ipcRenderer.on('update-status',(_,x)=>fn(x))
});