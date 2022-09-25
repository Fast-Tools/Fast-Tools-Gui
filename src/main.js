const { invoke } = window.__TAURI__.tauri;
import { Command } from '@tauri-apps/api/shell'




function download() { 
const install = new Command('Installing-FastMc')
install.spawn()
}