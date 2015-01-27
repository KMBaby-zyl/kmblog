#sublime text 2

***

###  常用User Setting

    {
        "default_encoding": "UTF-8",
        "font_size": 13.0,
        "tab_size": 4,
        "translate_tabs_to_spaces": true,
        "trim_trailing_white_space_on_save": true
    }


### package control

按下 ctrl ＋ ｀ 出现console menu
输入下面的命令

    import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')

之后重启sublime

Press Command-Shift-P (Mac OS X) or Ctrl-Shift-P (Windows) 可以看到许多sublime的命令

使用 install package 来安装各种subline插件如 sass等

### Compass 配置

Command+Shift+P

Install Package

Compass
### Sublimall (one sublimetext, all your devices)