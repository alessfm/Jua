const { BrowserWindow, app, ipcMain, Notification } = require('electron')
const path = require('path')

const isDev = !app.isPackaged

function createWindow(){
  const win = new BrowserWindow({
    width: 720,
    height: 640,
    backgroundColor: '#063251',
    icon: 'assets/icons/logo.png',
    webPreferences:{
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname,'preload.js')
    },
    show: false
    })

  win.loadFile('index.html')
  
  // boa prática para evitar telas vazias ou demoras para iniciar
  win.once('ready-to-show', () => {
    win.show()
  })
}

// para atualizar de acordo com as mudanças
if (isDev){
  require('electron-reload')(__dirname,{
    electron: path.join(__dirname,'node-modules','.bin','electron')
  })
}

// menu de opções ao clicar com o botão esquerdo do mouse no ícone do Jua
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'Nova Janela',
    description: 'Crie uma nova janela'
  }
])

// chamando a função que envia notificações a usuários do Windows
ipcMain.on('notify',(e,message)=>{
  new Notification({title:'Opa!',body: message}).show();
})

app.whenReady().then(createWindow);
