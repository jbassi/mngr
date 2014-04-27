




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>TouchSwipe-Jquery-Plugin/jquery.touchSwipe.js at master · mattbryson/TouchSwipe-Jquery-Plugin</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mattbryson/TouchSwipe-Jquery-Plugin" name="twitter:title" /><meta content="TouchSwipe-Jquery-Plugin - TouchSwipe is a jquery plugin to be used with jQuery on touch input devices such as iPad, iPhone etc. " name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/548948?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/548948?s=400" property="og:image" /><meta content="mattbryson/TouchSwipe-Jquery-Plugin" property="og:title" /><meta content="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin" property="og:url" /><meta content="TouchSwipe-Jquery-Plugin - TouchSwipe is a jquery plugin to be used with jQuery on touch input devices such as iPad, iPhone etc. " property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8036C9FC:287E:5A52EF:535CB41C" name="octolytics-dimension-request_id" /><meta content="7244488" name="octolytics-actor-id" /><meta content="ryingg" name="octolytics-actor-login" /><meta content="bd0d9f633b7cf58d5b73295c6c43bdc5f4434ba2dcd886e399edf6f38a1d327a" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="OJjYtgkIS5uGpZ0t8DmPiKIYjCVK694UzSPR2MiMvYP+kRuUGyfTkFJF2fUwewOTl7AFU57XVZTBaDjETSrkkA==" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-cc557869fb9cdb388d66a57c972147dfcf6cc34f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-1202793039fee08f007a3b9e0dd1192c81e4c31d.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-83bb02a73dd69926304fd1a101dbd75aa669e8dd.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-1d850079447c8a04da81d39c2573cedf09aae011.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="ac84ed3e1ff52b563c520bd0abcbca43">

        <link data-pjax-transient rel='permalink' href='/mattbryson/TouchSwipe-Jquery-Plugin/blob/48c15305f096d80b2bca2122876d44a6a1d48df4/jquery.touchSwipe.js'>

  <meta name="description" content="TouchSwipe-Jquery-Plugin - TouchSwipe is a jquery plugin to be used with jQuery on touch input devices such as iPad, iPhone etc. " />

  <meta content="548948" name="octolytics-dimension-user_id" /><meta content="mattbryson" name="octolytics-dimension-user_login" /><meta content="1965839" name="octolytics-dimension-repository_id" /><meta content="mattbryson/TouchSwipe-Jquery-Plugin" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1965839" name="octolytics-dimension-repository_network_root_id" /><meta content="mattbryson/TouchSwipe-Jquery-Plugin" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/commits/master.atom" rel="alternate" title="Recent Commits to TouchSwipe-Jquery-Plugin:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="ryingg"
      data-repo="mattbryson/TouchSwipe-Jquery-Plugin"
      data-branch="master"
      data-sha="2dc0338396d94003483e5f09c62d4387669ddaf6"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="mattbryson/TouchSwipe-Jquery-Plugin" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/ryingg" class="name">
        <img alt="ryingg" class=" js-avatar" data-user="7244488" height="20" src="https://avatars3.githubusercontent.com/u/7244488?s=140" width="20" /> ryingg
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings (You have no verified emails)">
        <span class="octicon octicon-tools"></span>
      </a>
        <span class="settings-warning">!</span>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="mattbryson/TouchSwipe-Jquery-Plugin">This repository</span>
    </li>
      <li>
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        

<div class="flash-global js-notice flash-warn">
<div class="container">
    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>


















</div>
</div>


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Mo+hOOi7ZUtiwbTVLCDu/dcaFqoZHyojNYKxQQ6sG9+zj4TDSkdk5LSu9yriCTPQWQ9J1NA2A19CbkpcOdvn0w==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1965839" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/mattbryson/TouchSwipe-Jquery-Plugin/watchers">
        143
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/mattbryson/TouchSwipe-Jquery-Plugin/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar mattbryson/TouchSwipe-Jquery-Plugin" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/mattbryson/TouchSwipe-Jquery-Plugin/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star mattbryson/TouchSwipe-Jquery-Plugin" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/mattbryson/TouchSwipe-Jquery-Plugin/stargazers">
        1,579
      </a>
  </div>

  </li>


        <li>
          <a href="/mattbryson/TouchSwipe-Jquery-Plugin/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of mattbryson/TouchSwipe-Jquery-Plugin to your account" aria-label="Fork your own copy of mattbryson/TouchSwipe-Jquery-Plugin to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/mattbryson/TouchSwipe-Jquery-Plugin/network" class="social-count">754</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mattbryson" class="url fn" itemprop="url" rel="author"><span itemprop="title">mattbryson</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mattbryson/TouchSwipe-Jquery-Plugin" class="js-current-repository js-repo-home-link">TouchSwipe-Jquery-Plugin</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /mattbryson/TouchSwipe-Jquery-Plugin">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/mattbryson/TouchSwipe-Jquery-Plugin/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /mattbryson/TouchSwipe-Jquery-Plugin/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>70</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /mattbryson/TouchSwipe-Jquery-Plugin/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>7</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/mattbryson/TouchSwipe-Jquery-Plugin/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /mattbryson/TouchSwipe-Jquery-Plugin/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /mattbryson/TouchSwipe-Jquery-Plugin/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /mattbryson/TouchSwipe-Jquery-Plugin/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /mattbryson/TouchSwipe-Jquery-Plugin/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:mattbryson/TouchSwipe-Jquery-Plugin.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mattbryson/TouchSwipe-Jquery-Plugin.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mattbryson/TouchSwipe-Jquery-Plugin" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/mattbryson/TouchSwipe-Jquery-Plugin" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save mattbryson/TouchSwipe-Jquery-Plugin to your computer and use it in GitHub Desktop." aria-label="Save mattbryson/TouchSwipe-Jquery-Plugin to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/mattbryson/TouchSwipe-Jquery-Plugin/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download mattbryson/TouchSwipe-Jquery-Plugin as a zip file"
                   title="Download mattbryson/TouchSwipe-Jquery-Plugin as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:473131103557a29b99ad42d4478b4f89 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mattbryson/TouchSwipe-Jquery-Plugin/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blob/1.3.x/jquery.touchSwipe.js"
                 data-name="1.3.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.x">1.3.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blob/1.4.x/jquery.touchSwipe.js"
                 data-name="1.4.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.x">1.4.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blob/1.5.x/jquery.touchSwipe.js"
                 data-name="1.5.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.5.x">1.5.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blob/1.6.x/jquery.touchSwipe.js"
                 data-name="1.6.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.6.x">1.6.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blob/gh-pages/jquery.touchSwipe.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blob/master/jquery.touchSwipe.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/tree/1.6.4/jquery.touchSwipe.js"
                 data-name="1.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.6.4">1.6.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/tree/1.6.3/jquery.touchSwipe.js"
                 data-name="1.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.6.3">1.6.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/tree/1.6.2/jquery.touchSwipe.js"
                 data-name="1.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.6.2">1.6.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mattbryson/TouchSwipe-Jquery-Plugin/tree/1.6.0/jquery.touchSwipe.js"
                 data-name="1.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.6.0">1.6.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mattbryson/TouchSwipe-Jquery-Plugin" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">TouchSwipe-Jquery-Plugin</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.touchSwipe.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.touchSwipe.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Matt Bryson" class="main-avatar js-avatar" data-user="548948" height="24" src="https://avatars2.githubusercontent.com/u/548948?s=140" width="24" />
    <span class="author"><a href="/mattbryson" rel="author">mattbryson</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-08-24T19:52:05+01:00" title="2013-08-24 18:52:05">August 24, 2013</time>
    <div class="commit-title">
        <a href="/mattbryson/TouchSwipe-Jquery-Plugin/commit/0191d31969d1bdb85cd0f882ccab87a358c9e387" class="message" data-pjax="true" title="Merged pull requests, added AMD support">Merged pull requests, added AMD support</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>7</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="mattbryson" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=mattbryson"><img alt="Matt Bryson" class=" js-avatar" data-user="548948" height="20" src="https://avatars2.githubusercontent.com/u/548948?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="voidplus" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=voidplus"><img alt="Darius M." class=" js-avatar" data-user="670641" height="20" src="https://avatars1.githubusercontent.com/u/670641?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="willosof" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=willosof"><img alt="William Viker" class=" js-avatar" data-user="426386" height="20" src="https://avatars1.githubusercontent.com/u/426386?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="miracle2k" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=miracle2k"><img alt="Michael Elsdörfer" class=" js-avatar" data-user="13807" height="20" src="https://avatars0.githubusercontent.com/u/13807?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="wyoumans" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=wyoumans"><img alt="Will" class=" js-avatar" data-user="414831" height="20" src="https://avatars0.githubusercontent.com/u/414831?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jonatron" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=jonatron"><img alt="jonatron" class=" js-avatar" data-user="708534" height="20" src="https://avatars2.githubusercontent.com/u/708534?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jerone" href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js?author=jerone"><img alt="Jeroen van Warmerdam" class=" js-avatar" data-user="55841" height="20" src="https://avatars1.githubusercontent.com/u/55841?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Matt Bryson" class=" js-avatar" data-user="548948" height="24" src="https://avatars2.githubusercontent.com/u/548948?s=140" width="24" />
            <a href="/mattbryson">mattbryson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Darius M." class=" js-avatar" data-user="670641" height="24" src="https://avatars1.githubusercontent.com/u/670641?s=140" width="24" />
            <a href="/voidplus">voidplus</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="William Viker" class=" js-avatar" data-user="426386" height="24" src="https://avatars1.githubusercontent.com/u/426386?s=140" width="24" />
            <a href="/willosof">willosof</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Michael Elsdörfer" class=" js-avatar" data-user="13807" height="24" src="https://avatars0.githubusercontent.com/u/13807?s=140" width="24" />
            <a href="/miracle2k">miracle2k</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Will" class=" js-avatar" data-user="414831" height="24" src="https://avatars0.githubusercontent.com/u/414831?s=140" width="24" />
            <a href="/wyoumans">wyoumans</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="jonatron" class=" js-avatar" data-user="708534" height="24" src="https://avatars2.githubusercontent.com/u/708534?s=140" width="24" />
            <a href="/jonatron">jonatron</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeroen van Warmerdam" class=" js-avatar" data-user="55841" height="24" src="https://avatars1.githubusercontent.com/u/55841?s=140" width="24" />
            <a href="/jerone">jerone</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1981 lines (1661 sloc)</span>
          <span class="meta-divider"></span>
        <span>67.916 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/mattbryson/TouchSwipe-Jquery-Plugin?branch=master&amp;filepath=jquery.touchSwipe.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/mattbryson/TouchSwipe-Jquery-Plugin/edit/master/jquery.touchSwipe.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/mattbryson/TouchSwipe-Jquery-Plugin/raw/master/jquery.touchSwipe.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mattbryson/TouchSwipe-Jquery-Plugin/blame/master/jquery.touchSwipe.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/mattbryson/TouchSwipe-Jquery-Plugin/commits/master/jquery.touchSwipe.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/mattbryson/TouchSwipe-Jquery-Plugin/delete/master/jquery.touchSwipe.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>
<span id="L1930" rel="#L1930">1930</span>
<span id="L1931" rel="#L1931">1931</span>
<span id="L1932" rel="#L1932">1932</span>
<span id="L1933" rel="#L1933">1933</span>
<span id="L1934" rel="#L1934">1934</span>
<span id="L1935" rel="#L1935">1935</span>
<span id="L1936" rel="#L1936">1936</span>
<span id="L1937" rel="#L1937">1937</span>
<span id="L1938" rel="#L1938">1938</span>
<span id="L1939" rel="#L1939">1939</span>
<span id="L1940" rel="#L1940">1940</span>
<span id="L1941" rel="#L1941">1941</span>
<span id="L1942" rel="#L1942">1942</span>
<span id="L1943" rel="#L1943">1943</span>
<span id="L1944" rel="#L1944">1944</span>
<span id="L1945" rel="#L1945">1945</span>
<span id="L1946" rel="#L1946">1946</span>
<span id="L1947" rel="#L1947">1947</span>
<span id="L1948" rel="#L1948">1948</span>
<span id="L1949" rel="#L1949">1949</span>
<span id="L1950" rel="#L1950">1950</span>
<span id="L1951" rel="#L1951">1951</span>
<span id="L1952" rel="#L1952">1952</span>
<span id="L1953" rel="#L1953">1953</span>
<span id="L1954" rel="#L1954">1954</span>
<span id="L1955" rel="#L1955">1955</span>
<span id="L1956" rel="#L1956">1956</span>
<span id="L1957" rel="#L1957">1957</span>
<span id="L1958" rel="#L1958">1958</span>
<span id="L1959" rel="#L1959">1959</span>
<span id="L1960" rel="#L1960">1960</span>
<span id="L1961" rel="#L1961">1961</span>
<span id="L1962" rel="#L1962">1962</span>
<span id="L1963" rel="#L1963">1963</span>
<span id="L1964" rel="#L1964">1964</span>
<span id="L1965" rel="#L1965">1965</span>
<span id="L1966" rel="#L1966">1966</span>
<span id="L1967" rel="#L1967">1967</span>
<span id="L1968" rel="#L1968">1968</span>
<span id="L1969" rel="#L1969">1969</span>
<span id="L1970" rel="#L1970">1970</span>
<span id="L1971" rel="#L1971">1971</span>
<span id="L1972" rel="#L1972">1972</span>
<span id="L1973" rel="#L1973">1973</span>
<span id="L1974" rel="#L1974">1974</span>
<span id="L1975" rel="#L1975">1975</span>
<span id="L1976" rel="#L1976">1976</span>
<span id="L1977" rel="#L1977">1977</span>
<span id="L1978" rel="#L1978">1978</span>
<span id="L1979" rel="#L1979">1979</span>
<span id="L1980" rel="#L1980">1980</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">* @fileOverview TouchSwipe - jQuery Plugin</span></div><div class='line' id='LC3'><span class="cm">* @version 1.6.5</span></div><div class='line' id='LC4'><span class="cm">*</span></div><div class='line' id='LC5'><span class="cm">* @author Matt Bryson http://www.github.com/mattbryson</span></div><div class='line' id='LC6'><span class="cm">* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin</span></div><div class='line' id='LC7'><span class="cm">* @see http://labs.skinkers.com/touchSwipe/</span></div><div class='line' id='LC8'><span class="cm">* @see http://plugins.jquery.com/project/touchSwipe</span></div><div class='line' id='LC9'><span class="cm">*</span></div><div class='line' id='LC10'><span class="cm">* Copyright (c) 2010 Matt Bryson</span></div><div class='line' id='LC11'><span class="cm">* Dual licensed under the MIT or GPL Version 2 licenses.</span></div><div class='line' id='LC12'><span class="cm">*</span></div><div class='line' id='LC13'><span class="cm">*</span></div><div class='line' id='LC14'><span class="cm">* Changelog</span></div><div class='line' id='LC15'><span class="cm">* $Date: 2010-12-12 (Wed, 12 Dec 2010) $</span></div><div class='line' id='LC16'><span class="cm">* $version: 1.0.0</span></div><div class='line' id='LC17'><span class="cm">* $version: 1.0.1 - removed multibyte comments</span></div><div class='line' id='LC18'><span class="cm">*</span></div><div class='line' id='LC19'><span class="cm">* $Date: 2011-21-02 (Mon, 21 Feb 2011) $</span></div><div class='line' id='LC20'><span class="cm">* $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page</span></div><div class='line' id='LC21'><span class="cm">*					- changed handler signatures so one handler can be used for multiple events</span></div><div class='line' id='LC22'><span class="cm">* $Date: 2011-23-02 (Wed, 23 Feb 2011) $</span></div><div class='line' id='LC23'><span class="cm">* $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.</span></div><div class='line' id='LC24'><span class="cm">*					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.</span></div><div class='line' id='LC25'><span class="cm">* $version: 1.2.1 	- removed console log!</span></div><div class='line' id='LC26'><span class="cm">*</span></div><div class='line' id='LC27'><span class="cm">* $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.</span></div><div class='line' id='LC28'><span class="cm">*</span></div><div class='line' id='LC29'><span class="cm">* $Date: 2011-28-04 (Thurs, 28 April 2011) $</span></div><div class='line' id='LC30'><span class="cm">* $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.</span></div><div class='line' id='LC31'><span class="cm">*</span></div><div class='line' id='LC32'><span class="cm">* $Date: 2011-27-09 (Tues, 27 September 2011) $</span></div><div class='line' id='LC33'><span class="cm">* $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)</span></div><div class='line' id='LC34'><span class="cm">*</span></div><div class='line' id='LC35'><span class="cm">* $Date: 2012-14-05 (Mon, 14 May 2012) $</span></div><div class='line' id='LC36'><span class="cm">* $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected</span></div><div class='line' id='LC37'><span class="cm">*</span></div><div class='line' id='LC38'><span class="cm">* $Date: 2012-05-06 (Tues, 05 June 2012) $</span></div><div class='line' id='LC39'><span class="cm">* $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.</span></div><div class='line' id='LC40'><span class="cm">*</span></div><div class='line' id='LC41'><span class="cm">* $Date: 2012-05-06 (Tues, 05 June 2012) $</span></div><div class='line' id='LC42'><span class="cm">* $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.</span></div><div class='line' id='LC43'><span class="cm">*</span></div><div class='line' id='LC44'><span class="cm">* $Date: 2012-06-06 (Wed, 06 June 2012) $</span></div><div class='line' id='LC45'><span class="cm">* $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added &#39;enable&#39;, &#39;disable&#39;, and &#39;destroy&#39; methods</span></div><div class='line' id='LC46'><span class="cm">*</span></div><div class='line' id='LC47'><span class="cm">* $Date: 2012-05-06 (Fri, 05 June 2012) $</span></div><div class='line' id='LC48'><span class="cm">* $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.</span></div><div class='line' id='LC49'><span class="cm">*</span></div><div class='line' id='LC50'><span class="cm">* $Date: 2012-29-07 (Sun, 29 July 2012) $</span></div><div class='line' id='LC51'><span class="cm">* $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.</span></div><div class='line' id='LC52'><span class="cm">* 			- Added &quot;all&quot; fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count</span></div><div class='line' id='LC53'><span class="cm">*</span></div><div class='line' id='LC54'><span class="cm">* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $</span></div><div class='line' id='LC55'><span class="cm">* $version: 1.3.3	- Code tidy prep for minefied version</span></div><div class='line' id='LC56'><span class="cm">*</span></div><div class='line' id='LC57'><span class="cm">* $Date: 2012-04-10 (wed, 4 Oct 2012) $</span></div><div class='line' id='LC58'><span class="cm">* $version: 1.4.0	- Added pinch support, pinchIn and pinchOut</span></div><div class='line' id='LC59'><span class="cm">*</span></div><div class='line' id='LC60'><span class="cm">* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $</span></div><div class='line' id='LC61'><span class="cm">* $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.</span></div><div class='line' id='LC62'><span class="cm">*</span></div><div class='line' id='LC63'><span class="cm">* $Date: 2012-22-10 (Mon, 22 Oct 2012) $</span></div><div class='line' id='LC64'><span class="cm">* $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements</span></div><div class='line' id='LC65'><span class="cm">*					- Fixed bug with IE and eventPreventDefault()</span></div><div class='line' id='LC66'><span class="cm">* $Date: 2013-01-12 (Fri, 12 Jan 2013) $</span></div><div class='line' id='LC67'><span class="cm">* $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.</span></div><div class='line' id='LC68'><span class="cm">*					- made the demo site all static local HTML pages so they can be run locally by a developer</span></div><div class='line' id='LC69'><span class="cm">*					- added jsDoc comments and added documentation for the plugin	</span></div><div class='line' id='LC70'><span class="cm">*					- code tidy</span></div><div class='line' id='LC71'><span class="cm">*					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.</span></div><div class='line' id='LC72'><span class="cm">* $Date: 2013-03-23 (Sat, 23 Mar 2013) $</span></div><div class='line' id='LC73'><span class="cm">* $version: 1.6.1	- Added support for ie8 touch events</span></div><div class='line' id='LC74'><span class="cm">* $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.</span></div><div class='line' id='LC75'><span class="cm">*                   - Deprecated the &#39;click&#39; handler in favour of tap.</span></div><div class='line' id='LC76'><span class="cm">*                   - added cancelThreshold property</span></div><div class='line' id='LC77'><span class="cm">*                   - added option method to update init options at runtime</span></div><div class='line' id='LC78'><span class="cm">*</span></div><div class='line' id='LC79'><span class="cm">* $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property</span></div><div class='line' id='LC80'><span class="cm">* $Date: 2013-04-04 (Thurs, 04 April 2013) $</span></div><div class='line' id='LC81'><span class="cm">* $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.</span></div><div class='line' id='LC82'><span class="cm">*</span></div><div class='line' id='LC83'><span class="cm">* $Date: 2013-08-24 (Sat, 24 Aug 2013) $</span></div><div class='line' id='LC84'><span class="cm">* $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'><span class="cm">*/</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'><span class="cm">/**</span></div><div class='line' id='LC89'><span class="cm"> * See (http://jquery.com/).</span></div><div class='line' id='LC90'><span class="cm"> * @name $</span></div><div class='line' id='LC91'><span class="cm"> * @class </span></div><div class='line' id='LC92'><span class="cm"> * See the jQuery Library  (http://jquery.com/) for full details.  This just</span></div><div class='line' id='LC93'><span class="cm"> * documents the function and classes that are added to jQuery by this plug-in.</span></div><div class='line' id='LC94'><span class="cm"> */</span></div><div class='line' id='LC95'>&nbsp;</div><div class='line' id='LC96'><span class="cm">/**</span></div><div class='line' id='LC97'><span class="cm"> * See (http://jquery.com/)</span></div><div class='line' id='LC98'><span class="cm"> * @name fn</span></div><div class='line' id='LC99'><span class="cm"> * @class </span></div><div class='line' id='LC100'><span class="cm"> * See the jQuery Library  (http://jquery.com/) for full details.  This just</span></div><div class='line' id='LC101'><span class="cm"> * documents the function and classes that are added to jQuery by this plug-in.</span></div><div class='line' id='LC102'><span class="cm"> * @memberOf $</span></div><div class='line' id='LC103'><span class="cm"> */</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD. Register as anonymous module.</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">factory</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Browser globals.</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC115'><span class="p">}(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC116'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>	<span class="c1">//Constants</span></div><div class='line' id='LC119'>	<span class="kd">var</span> <span class="nx">LEFT</span> <span class="o">=</span> <span class="s2">&quot;left&quot;</span><span class="p">,</span></div><div class='line' id='LC120'>		<span class="nx">RIGHT</span> <span class="o">=</span> <span class="s2">&quot;right&quot;</span><span class="p">,</span></div><div class='line' id='LC121'>		<span class="nx">UP</span> <span class="o">=</span> <span class="s2">&quot;up&quot;</span><span class="p">,</span></div><div class='line' id='LC122'>		<span class="nx">DOWN</span> <span class="o">=</span> <span class="s2">&quot;down&quot;</span><span class="p">,</span></div><div class='line' id='LC123'>		<span class="nx">IN</span> <span class="o">=</span> <span class="s2">&quot;in&quot;</span><span class="p">,</span></div><div class='line' id='LC124'>		<span class="nx">OUT</span> <span class="o">=</span> <span class="s2">&quot;out&quot;</span><span class="p">,</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>		<span class="nx">NONE</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span><span class="p">,</span></div><div class='line' id='LC127'>		<span class="nx">AUTO</span> <span class="o">=</span> <span class="s2">&quot;auto&quot;</span><span class="p">,</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>		<span class="nx">SWIPE</span> <span class="o">=</span> <span class="s2">&quot;swipe&quot;</span><span class="p">,</span></div><div class='line' id='LC130'>		<span class="nx">PINCH</span> <span class="o">=</span> <span class="s2">&quot;pinch&quot;</span><span class="p">,</span></div><div class='line' id='LC131'>		<span class="nx">TAP</span> <span class="o">=</span> <span class="s2">&quot;tap&quot;</span><span class="p">,</span></div><div class='line' id='LC132'>		<span class="nx">DOUBLE_TAP</span> <span class="o">=</span> <span class="s2">&quot;doubletap&quot;</span><span class="p">,</span></div><div class='line' id='LC133'>		<span class="nx">LONG_TAP</span> <span class="o">=</span> <span class="s2">&quot;longtap&quot;</span><span class="p">,</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>		<span class="nx">HORIZONTAL</span> <span class="o">=</span> <span class="s2">&quot;horizontal&quot;</span><span class="p">,</span></div><div class='line' id='LC136'>		<span class="nx">VERTICAL</span> <span class="o">=</span> <span class="s2">&quot;vertical&quot;</span><span class="p">,</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>		<span class="nx">ALL_FINGERS</span> <span class="o">=</span> <span class="s2">&quot;all&quot;</span><span class="p">,</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>		<span class="nx">DOUBLE_TAP_THRESHOLD</span> <span class="o">=</span> <span class="mi">10</span><span class="p">,</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>		<span class="nx">PHASE_START</span> <span class="o">=</span> <span class="s2">&quot;start&quot;</span><span class="p">,</span></div><div class='line' id='LC143'>		<span class="nx">PHASE_MOVE</span> <span class="o">=</span> <span class="s2">&quot;move&quot;</span><span class="p">,</span></div><div class='line' id='LC144'>		<span class="nx">PHASE_END</span> <span class="o">=</span> <span class="s2">&quot;end&quot;</span><span class="p">,</span></div><div class='line' id='LC145'>		<span class="nx">PHASE_CANCEL</span> <span class="o">=</span> <span class="s2">&quot;cancel&quot;</span><span class="p">,</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>		<span class="nx">SUPPORTS_TOUCH</span> <span class="o">=</span> <span class="s1">&#39;ontouchstart&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">,</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>		<span class="nx">PLUGIN_NS</span> <span class="o">=</span> <span class="s1">&#39;TouchSwipe&#39;</span><span class="p">;</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>	<span class="cm">/**</span></div><div class='line' id='LC154'><span class="cm">	* The default configuration, and available options to configure touch swipe with.</span></div><div class='line' id='LC155'><span class="cm">	* You can set the default values by updating any of the properties prior to instantiation.</span></div><div class='line' id='LC156'><span class="cm">	* @name $.fn.swipe.defaults</span></div><div class='line' id='LC157'><span class="cm">	* @namespace</span></div><div class='line' id='LC158'><span class="cm">	* @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.</span></div><div class='line' id='LC159'><span class="cm">	* @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe. </span></div><div class='line' id='LC160'><span class="cm">	* @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.</span></div><div class='line' id='LC161'><span class="cm">	* @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch. </span></div><div class='line' id='LC162'><span class="cm">	* @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe. </span></div><div class='line' id='LC163'><span class="cm">	* @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release. </span></div><div class='line' id='LC164'><span class="cm">	* @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap</span></div><div class='line' id='LC165'><span class="cm">    * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap</span></div><div class='line' id='LC166'><span class="cm">	* @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}</span></div><div class='line' id='LC167'><span class="cm">	* @property {function} [swipeLeft=null] A handler that is triggered for &quot;left&quot; swipes. See {@link $.fn.swipe#event:swipeLeft}</span></div><div class='line' id='LC168'><span class="cm">	* @property {function} [swipeRight=null] A handler that is triggered for &quot;right&quot; swipes. See {@link $.fn.swipe#event:swipeRight}</span></div><div class='line' id='LC169'><span class="cm">	* @property {function} [swipeUp=null] A handler that is triggered for &quot;up&quot; swipes. See {@link $.fn.swipe#event:swipeUp}</span></div><div class='line' id='LC170'><span class="cm">	* @property {function} [swipeDown=null] A handler that is triggered for &quot;down&quot; swipes. See {@link $.fn.swipe#event:swipeDown}</span></div><div class='line' id='LC171'><span class="cm">	* @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}</span></div><div class='line' id='LC172'><span class="cm">	* @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}</span></div><div class='line' id='LC173'><span class="cm">	* @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}</span></div><div class='line' id='LC174'><span class="cm">	* @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}</span></div><div class='line' id='LC175'><span class="cm">	* @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not. </span></div><div class='line' id='LC176'><span class="cm">	* @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}</span></div><div class='line' id='LC177'><span class="cm">	* @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}</span></div><div class='line' id='LC178'><span class="cm">	* @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically. </span></div><div class='line' id='LC179'><span class="cm">	* @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers. </span></div><div class='line' id='LC180'><span class="cm">	* @property {string|undefined} [allowPageScroll=&#39;auto&#39;] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  &lt;br/&gt;&lt;br/&gt;</span></div><div class='line' id='LC181'><span class="cm">										&lt;code&gt;&quot;auto&quot;&lt;/code&gt; : all undefined swipes will cause the page to scroll in that direction. &lt;br/&gt;</span></div><div class='line' id='LC182'><span class="cm">										&lt;code&gt;&quot;none&quot;&lt;/code&gt; : the page will not scroll when user swipes. &lt;br/&gt;</span></div><div class='line' id='LC183'><span class="cm">										&lt;code&gt;&quot;horizontal&quot;&lt;/code&gt; : will force page to scroll on horizontal swipes. &lt;br/&gt;</span></div><div class='line' id='LC184'><span class="cm">										&lt;code&gt;&quot;vertical&quot;&lt;/code&gt; : will force page to scroll on vertical swipes. &lt;br/&gt;</span></div><div class='line' id='LC185'><span class="cm">	* @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices. </span></div><div class='line' id='LC186'><span class="cm">	* @property {string} [excludedElements=&quot;button, input, select, textarea, a, .noSwipe&quot;] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements. </span></div><div class='line' id='LC187'><span class="cm">	</span></div><div class='line' id='LC188'><span class="cm">	*/</span></div><div class='line' id='LC189'>	<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC190'>		<span class="nx">fingers</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> 		</div><div class='line' id='LC191'>		<span class="nx">threshold</span><span class="o">:</span> <span class="mi">75</span><span class="p">,</span> 	</div><div class='line' id='LC192'>		<span class="nx">cancelThreshold</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span>	</div><div class='line' id='LC193'>		<span class="nx">pinchThreshold</span><span class="o">:</span><span class="mi">20</span><span class="p">,</span></div><div class='line' id='LC194'>		<span class="nx">maxTimeThreshold</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> </div><div class='line' id='LC195'>		<span class="nx">fingerReleaseThreshold</span><span class="o">:</span><span class="mi">250</span><span class="p">,</span> </div><div class='line' id='LC196'>		<span class="nx">longTapThreshold</span><span class="o">:</span><span class="mi">500</span><span class="p">,</span></div><div class='line' id='LC197'>		<span class="nx">doubleTapThreshold</span><span class="o">:</span><span class="mi">200</span><span class="p">,</span></div><div class='line' id='LC198'>		<span class="nx">swipe</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> 		</div><div class='line' id='LC199'>		<span class="nx">swipeLeft</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> 	</div><div class='line' id='LC200'>		<span class="nx">swipeRight</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> 	</div><div class='line' id='LC201'>		<span class="nx">swipeUp</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> 		</div><div class='line' id='LC202'>		<span class="nx">swipeDown</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> 	</div><div class='line' id='LC203'>		<span class="nx">swipeStatus</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> 	</div><div class='line' id='LC204'>		<span class="nx">pinchIn</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span>		</div><div class='line' id='LC205'>		<span class="nx">pinchOut</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span>		</div><div class='line' id='LC206'>		<span class="nx">pinchStatus</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span>	</div><div class='line' id='LC207'>		<span class="nx">click</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span> <span class="c1">//Deprecated since 1.6.2</span></div><div class='line' id='LC208'>		<span class="nx">tap</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC209'>		<span class="nx">doubleTap</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC210'>		<span class="nx">longTap</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span> 		</div><div class='line' id='LC211'>		<span class="nx">triggerOnTouchEnd</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> </div><div class='line' id='LC212'>		<span class="nx">triggerOnTouchLeave</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span> </div><div class='line' id='LC213'>		<span class="nx">allowPageScroll</span><span class="o">:</span> <span class="s2">&quot;auto&quot;</span><span class="p">,</span> </div><div class='line' id='LC214'>		<span class="nx">fallbackToMouseEvents</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>	</div><div class='line' id='LC215'>		<span class="nx">excludedElements</span><span class="o">:</span><span class="s2">&quot;label, button, input, select, textarea, a, .noSwipe&quot;</span></div><div class='line' id='LC216'>	<span class="p">};</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>	<span class="cm">/**</span></div><div class='line' id='LC221'><span class="cm">	* Applies TouchSwipe behaviour to one or more jQuery objects.</span></div><div class='line' id='LC222'><span class="cm">	* The TouchSwipe plugin can be instantiated via this method, or methods within </span></div><div class='line' id='LC223'><span class="cm">	* TouchSwipe can be executed via this method as per jQuery plugin architecture.</span></div><div class='line' id='LC224'><span class="cm">	* @see TouchSwipe</span></div><div class='line' id='LC225'><span class="cm">	* @class</span></div><div class='line' id='LC226'><span class="cm">	* @param {Mixed} method If the current DOMNode is a TouchSwipe object, and &lt;code&gt;method&lt;/code&gt; is a TouchSwipe method, then</span></div><div class='line' id='LC227'><span class="cm">	* the &lt;code&gt;method&lt;/code&gt; is executed, and any following arguments are passed to the TouchSwipe method.</span></div><div class='line' id='LC228'><span class="cm">	* If &lt;code&gt;method&lt;/code&gt; is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the </span></div><div class='line' id='LC229'><span class="cm">	* configuration properties defined in the object. See TouchSwipe</span></div><div class='line' id='LC230'><span class="cm">	*</span></div><div class='line' id='LC231'><span class="cm">	*/</span></div><div class='line' id='LC232'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>		<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC234'>			<span class="nx">plugin</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">PLUGIN_NS</span><span class="p">);</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>		<span class="c1">//Check if we are already instantiated and trying to execute a method	</span></div><div class='line' id='LC237'>		<span class="k">if</span> <span class="p">(</span><span class="nx">plugin</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>			<span class="k">if</span> <span class="p">(</span><span class="nx">plugin</span><span class="p">[</span><span class="nx">method</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC239'>				<span class="k">return</span> <span class="nx">plugin</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC240'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC241'>				<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;Method &#39;</span> <span class="o">+</span> <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39; does not exist on jQuery.swipe&#39;</span><span class="p">);</span></div><div class='line' id='LC242'>			<span class="p">}</span></div><div class='line' id='LC243'>		<span class="p">}</span></div><div class='line' id='LC244'>		<span class="c1">//Else not instantiated and trying to pass init object (or nothing)</span></div><div class='line' id='LC245'>		<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">plugin</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="o">!</span><span class="nx">method</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC246'>			<span class="k">return</span> <span class="nx">init</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC247'>		<span class="p">}</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>		<span class="k">return</span> <span class="nx">$this</span><span class="p">;</span></div><div class='line' id='LC250'>	<span class="p">};</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>	<span class="c1">//Expose our defaults so a user could override the plugin defaults</span></div><div class='line' id='LC253'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="nx">defaults</span><span class="p">;</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>	<span class="cm">/**</span></div><div class='line' id='LC256'><span class="cm">	* The phases that a touch event goes through.  The &lt;code&gt;phase&lt;/code&gt; is passed to the event handlers. </span></div><div class='line' id='LC257'><span class="cm">	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.</span></div><div class='line' id='LC258'><span class="cm">	* @namespace</span></div><div class='line' id='LC259'><span class="cm">	* @readonly</span></div><div class='line' id='LC260'><span class="cm">	* @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is &lt;code&gt;&quot;start&quot;&lt;/code&gt;.</span></div><div class='line' id='LC261'><span class="cm">	* @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is &lt;code&gt;&quot;move&quot;&lt;/code&gt;.</span></div><div class='line' id='LC262'><span class="cm">	* @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is &lt;code&gt;&quot;end&quot;&lt;/code&gt;.</span></div><div class='line' id='LC263'><span class="cm">	* @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is &lt;code&gt;&quot;cancel&quot;&lt;/code&gt;.</span></div><div class='line' id='LC264'><span class="cm">	*/</span></div><div class='line' id='LC265'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">phases</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC266'>		<span class="nx">PHASE_START</span><span class="o">:</span> <span class="nx">PHASE_START</span><span class="p">,</span></div><div class='line' id='LC267'>		<span class="nx">PHASE_MOVE</span><span class="o">:</span> <span class="nx">PHASE_MOVE</span><span class="p">,</span></div><div class='line' id='LC268'>		<span class="nx">PHASE_END</span><span class="o">:</span> <span class="nx">PHASE_END</span><span class="p">,</span></div><div class='line' id='LC269'>		<span class="nx">PHASE_CANCEL</span><span class="o">:</span> <span class="nx">PHASE_CANCEL</span></div><div class='line' id='LC270'>	<span class="p">};</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>	<span class="cm">/**</span></div><div class='line' id='LC273'><span class="cm">	* The direction constants that are passed to the event handlers. </span></div><div class='line' id='LC274'><span class="cm">	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.</span></div><div class='line' id='LC275'><span class="cm">	* @namespace</span></div><div class='line' id='LC276'><span class="cm">	* @readonly</span></div><div class='line' id='LC277'><span class="cm">	* @property {string} LEFT Constant indicating the left direction. Value is &lt;code&gt;&quot;left&quot;&lt;/code&gt;.</span></div><div class='line' id='LC278'><span class="cm">	* @property {string} RIGHT Constant indicating the right direction. Value is &lt;code&gt;&quot;right&quot;&lt;/code&gt;.</span></div><div class='line' id='LC279'><span class="cm">	* @property {string} UP Constant indicating the up direction. Value is &lt;code&gt;&quot;up&quot;&lt;/code&gt;.</span></div><div class='line' id='LC280'><span class="cm">	* @property {string} DOWN Constant indicating the down direction. Value is &lt;code&gt;&quot;cancel&quot;&lt;/code&gt;.</span></div><div class='line' id='LC281'><span class="cm">	* @property {string} IN Constant indicating the in direction. Value is &lt;code&gt;&quot;in&quot;&lt;/code&gt;.</span></div><div class='line' id='LC282'><span class="cm">	* @property {string} OUT Constant indicating the out direction. Value is &lt;code&gt;&quot;out&quot;&lt;/code&gt;.</span></div><div class='line' id='LC283'><span class="cm">	*/</span></div><div class='line' id='LC284'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">directions</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC285'>		<span class="nx">LEFT</span><span class="o">:</span> <span class="nx">LEFT</span><span class="p">,</span></div><div class='line' id='LC286'>		<span class="nx">RIGHT</span><span class="o">:</span> <span class="nx">RIGHT</span><span class="p">,</span></div><div class='line' id='LC287'>		<span class="nx">UP</span><span class="o">:</span> <span class="nx">UP</span><span class="p">,</span></div><div class='line' id='LC288'>		<span class="nx">DOWN</span><span class="o">:</span> <span class="nx">DOWN</span><span class="p">,</span></div><div class='line' id='LC289'>		<span class="nx">IN</span> <span class="o">:</span> <span class="nx">IN</span><span class="p">,</span></div><div class='line' id='LC290'>		<span class="nx">OUT</span><span class="o">:</span> <span class="nx">OUT</span></div><div class='line' id='LC291'>	<span class="p">};</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>	<span class="cm">/**</span></div><div class='line' id='LC294'><span class="cm">	* The page scroll constants that can be used to set the value of &lt;code&gt;allowPageScroll&lt;/code&gt; option</span></div><div class='line' id='LC295'><span class="cm">	* These properties are read only</span></div><div class='line' id='LC296'><span class="cm">	* @namespace</span></div><div class='line' id='LC297'><span class="cm">	* @readonly</span></div><div class='line' id='LC298'><span class="cm">	* @see $.fn.swipe.defaults#allowPageScroll</span></div><div class='line' id='LC299'><span class="cm">	* @property {string} NONE Constant indicating no page scrolling is allowed. Value is &lt;code&gt;&quot;none&quot;&lt;/code&gt;.</span></div><div class='line' id='LC300'><span class="cm">	* @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is &lt;code&gt;&quot;horizontal&quot;&lt;/code&gt;.</span></div><div class='line' id='LC301'><span class="cm">	* @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is &lt;code&gt;&quot;vertical&quot;&lt;/code&gt;.</span></div><div class='line' id='LC302'><span class="cm">	* @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is &lt;code&gt;&quot;auto&quot;&lt;/code&gt;.</span></div><div class='line' id='LC303'><span class="cm">	*/</span></div><div class='line' id='LC304'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">pageScroll</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC305'>		<span class="nx">NONE</span><span class="o">:</span> <span class="nx">NONE</span><span class="p">,</span></div><div class='line' id='LC306'>		<span class="nx">HORIZONTAL</span><span class="o">:</span> <span class="nx">HORIZONTAL</span><span class="p">,</span></div><div class='line' id='LC307'>		<span class="nx">VERTICAL</span><span class="o">:</span> <span class="nx">VERTICAL</span><span class="p">,</span></div><div class='line' id='LC308'>		<span class="nx">AUTO</span><span class="o">:</span> <span class="nx">AUTO</span></div><div class='line' id='LC309'>	<span class="p">};</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>	<span class="cm">/**</span></div><div class='line' id='LC312'><span class="cm">	* Constants representing the number of fingers used in a swipe.  These are used to set both the value of &lt;code&gt;fingers&lt;/code&gt; in the </span></div><div class='line' id='LC313'><span class="cm">	* options object, as well as the value of the &lt;code&gt;fingers&lt;/code&gt; event property.</span></div><div class='line' id='LC314'><span class="cm">	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.</span></div><div class='line' id='LC315'><span class="cm">	* @namespace</span></div><div class='line' id='LC316'><span class="cm">	* @readonly</span></div><div class='line' id='LC317'><span class="cm">	* @see $.fn.swipe.defaults#fingers</span></div><div class='line' id='LC318'><span class="cm">	* @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is &lt;code&gt;1&lt;/code&gt;.</span></div><div class='line' id='LC319'><span class="cm">	* @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is &lt;code&gt;1&lt;/code&gt;.</span></div><div class='line' id='LC320'><span class="cm">	* @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is &lt;code&gt;1&lt;/code&gt;.</span></div><div class='line' id='LC321'><span class="cm">	* @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is &lt;code&gt;&quot;all&quot;&lt;/code&gt;.</span></div><div class='line' id='LC322'><span class="cm">	*/</span></div><div class='line' id='LC323'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC324'>		<span class="nx">ONE</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC325'>		<span class="nx">TWO</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC326'>		<span class="nx">THREE</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC327'>		<span class="nx">ALL</span><span class="o">:</span> <span class="nx">ALL_FINGERS</span></div><div class='line' id='LC328'>	<span class="p">};</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>	<span class="cm">/**</span></div><div class='line' id='LC331'><span class="cm">	* Initialise the plugin for each DOM element matched</span></div><div class='line' id='LC332'><span class="cm">	* This creates a new instance of the main TouchSwipe class for each DOM element, and then</span></div><div class='line' id='LC333'><span class="cm">	* saves a reference to that instance in the elements data property.</span></div><div class='line' id='LC334'><span class="cm">	* @internal</span></div><div class='line' id='LC335'><span class="cm">	*/</span></div><div class='line' id='LC336'>	<span class="kd">function</span> <span class="nx">init</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>		<span class="c1">//Prep and extend the options</span></div><div class='line' id='LC338'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipe</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeStatus</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC339'>			<span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">=</span> <span class="nx">NONE</span><span class="p">;</span></div><div class='line' id='LC340'>		<span class="p">}</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Check for deprecated options</span></div><div class='line' id='LC343'>		<span class="c1">//Ensure that any old click handlers are assigned to the new tap, unless we have a tap</span></div><div class='line' id='LC344'>		<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">click</span><span class="o">!==</span><span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">tap</span><span class="o">===</span><span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>		    <span class="nx">options</span><span class="p">.</span><span class="nx">tap</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">click</span><span class="p">;</span></div><div class='line' id='LC346'>		<span class="p">}</span></div><div class='line' id='LC347'><br/></div><div class='line' id='LC348'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC349'>			<span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC350'>		<span class="p">}</span></div><div class='line' id='LC351'><br/></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//pass empty object so we dont modify the defaults</span></div><div class='line' id='LC353'>		<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>		<span class="c1">//For each element instantiate the plugin</span></div><div class='line' id='LC356'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC357'>			<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>			<span class="c1">//Check we havent already initialised the plugin</span></div><div class='line' id='LC360'>			<span class="kd">var</span> <span class="nx">plugin</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">PLUGIN_NS</span><span class="p">);</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">plugin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC363'>				<span class="nx">plugin</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">TouchSwipe</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC364'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">PLUGIN_NS</span><span class="p">,</span> <span class="nx">plugin</span><span class="p">);</span></div><div class='line' id='LC365'>			<span class="p">}</span></div><div class='line' id='LC366'>		<span class="p">});</span></div><div class='line' id='LC367'>	<span class="p">}</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>	<span class="cm">/**</span></div><div class='line' id='LC370'><span class="cm">	* Main TouchSwipe Plugin Class.</span></div><div class='line' id='LC371'><span class="cm">	* Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}</span></div><div class='line' id='LC372'><span class="cm">	* @private</span></div><div class='line' id='LC373'><span class="cm">	* @name TouchSwipe</span></div><div class='line' id='LC374'><span class="cm">	* @param {DOMNode} element The HTML DOM object to apply to plugin to</span></div><div class='line' id='LC375'><span class="cm">	* @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}</span></div><div class='line' id='LC376'><span class="cm">	* @see $.fh.swipe.defaults</span></div><div class='line' id='LC377'><span class="cm">	* @see $.fh.swipe</span></div><div class='line' id='LC378'><span class="cm">    * @class</span></div><div class='line' id='LC379'><span class="cm">	*/</span></div><div class='line' id='LC380'>	<span class="kd">function</span> <span class="nx">TouchSwipe</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC381'>		<span class="kd">var</span> <span class="nx">useTouchEvents</span> <span class="o">=</span> <span class="p">(</span><span class="nx">SUPPORTS_TOUCH</span> <span class="o">||</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">fallbackToMouseEvents</span><span class="p">),</span></div><div class='line' id='LC382'>			<span class="nx">START_EV</span> <span class="o">=</span> <span class="nx">useTouchEvents</span> <span class="o">?</span> <span class="s1">&#39;touchstart&#39;</span> <span class="o">:</span> <span class="s1">&#39;mousedown&#39;</span><span class="p">,</span></div><div class='line' id='LC383'>			<span class="nx">MOVE_EV</span> <span class="o">=</span> <span class="nx">useTouchEvents</span> <span class="o">?</span> <span class="s1">&#39;touchmove&#39;</span> <span class="o">:</span> <span class="s1">&#39;mousemove&#39;</span><span class="p">,</span></div><div class='line' id='LC384'>			<span class="nx">END_EV</span> <span class="o">=</span> <span class="nx">useTouchEvents</span> <span class="o">?</span> <span class="s1">&#39;touchend&#39;</span> <span class="o">:</span> <span class="s1">&#39;mouseup&#39;</span><span class="p">,</span></div><div class='line' id='LC385'>			<span class="nx">LEAVE_EV</span> <span class="o">=</span> <span class="nx">useTouchEvents</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="s1">&#39;mouseleave&#39;</span><span class="p">,</span> <span class="c1">//we manually detect leave on touch devices, so null event here</span></div><div class='line' id='LC386'>			<span class="nx">CANCEL_EV</span> <span class="o">=</span> <span class="s1">&#39;touchcancel&#39;</span><span class="p">;</span></div><div class='line' id='LC387'><br/></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'><br/></div><div class='line' id='LC390'>		<span class="c1">//touch properties</span></div><div class='line' id='LC391'>		<span class="kd">var</span> <span class="nx">distance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC392'>			<span class="nx">direction</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC393'>			<span class="nx">duration</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC394'>			<span class="nx">startTouchesDistance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC395'>			<span class="nx">endTouchesDistance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC396'>			<span class="nx">pinchZoom</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC397'>			<span class="nx">pinchDistance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC398'>			<span class="nx">pinchDirection</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC399'>			<span class="nx">maximumsMap</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>		<span class="c1">//jQuery wrapped element for this instance</span></div><div class='line' id='LC404'>		<span class="kd">var</span> <span class="nx">$element</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>		<span class="c1">//Current phase of th touch cycle</span></div><div class='line' id='LC407'>		<span class="kd">var</span> <span class="nx">phase</span> <span class="o">=</span> <span class="s2">&quot;start&quot;</span><span class="p">;</span></div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>		<span class="c1">// the current number of fingers being used.</span></div><div class='line' id='LC410'>		<span class="kd">var</span> <span class="nx">fingerCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> 			</div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>		<span class="c1">//track mouse points / delta</span></div><div class='line' id='LC413'>		<span class="kd">var</span> <span class="nx">fingerData</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>		<span class="c1">//track times</span></div><div class='line' id='LC416'>		<span class="kd">var</span> <span class="nx">startTime</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC417'>			<span class="nx">endTime</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC418'>			<span class="nx">previousTouchEndTime</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC419'>			<span class="nx">previousTouchFingerCount</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC420'>			<span class="nx">doubleTapStartTime</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Timeouts</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">singleTapTimeout</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC425'>		<span class="c1">// Add gestures to all swipable areas if supported</span></div><div class='line' id='LC426'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC427'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">START_EV</span><span class="p">,</span> <span class="nx">touchStart</span><span class="p">);</span></div><div class='line' id='LC428'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">CANCEL_EV</span><span class="p">,</span> <span class="nx">touchCancel</span><span class="p">);</span></div><div class='line' id='LC429'>		<span class="p">}</span></div><div class='line' id='LC430'>		<span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;events not supported &#39;</span> <span class="o">+</span> <span class="nx">START_EV</span> <span class="o">+</span> <span class="s1">&#39;,&#39;</span> <span class="o">+</span> <span class="nx">CANCEL_EV</span> <span class="o">+</span> <span class="s1">&#39; on jQuery.swipe&#39;</span><span class="p">);</span></div><div class='line' id='LC432'>		<span class="p">}</span></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>		<span class="c1">//</span></div><div class='line' id='LC435'>		<span class="c1">//Public methods</span></div><div class='line' id='LC436'>		<span class="c1">//</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'>		<span class="cm">/**</span></div><div class='line' id='LC439'><span class="cm">		* re-enables the swipe plugin with the previous configuration</span></div><div class='line' id='LC440'><span class="cm">		* @function</span></div><div class='line' id='LC441'><span class="cm">		* @name $.fn.swipe#enable</span></div><div class='line' id='LC442'><span class="cm">		* @return {DOMNode} The Dom element that was registered with TouchSwipe </span></div><div class='line' id='LC443'><span class="cm">		* @example $(&quot;#element&quot;).swipe(&quot;enable&quot;);</span></div><div class='line' id='LC444'><span class="cm">		*/</span></div><div class='line' id='LC445'>		<span class="k">this</span><span class="p">.</span><span class="nx">enable</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC446'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">START_EV</span><span class="p">,</span> <span class="nx">touchStart</span><span class="p">);</span></div><div class='line' id='LC447'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">CANCEL_EV</span><span class="p">,</span> <span class="nx">touchCancel</span><span class="p">);</span></div><div class='line' id='LC448'>			<span class="k">return</span> <span class="nx">$element</span><span class="p">;</span></div><div class='line' id='LC449'>		<span class="p">};</span></div><div class='line' id='LC450'><br/></div><div class='line' id='LC451'>		<span class="cm">/**</span></div><div class='line' id='LC452'><span class="cm">		* disables the swipe plugin</span></div><div class='line' id='LC453'><span class="cm">		* @function</span></div><div class='line' id='LC454'><span class="cm">		* @name $.fn.swipe#disable</span></div><div class='line' id='LC455'><span class="cm">		* @return {DOMNode} The Dom element that is now registered with TouchSwipe</span></div><div class='line' id='LC456'><span class="cm">	    * @example $(&quot;#element&quot;).swipe(&quot;disable&quot;);</span></div><div class='line' id='LC457'><span class="cm">		*/</span></div><div class='line' id='LC458'>		<span class="k">this</span><span class="p">.</span><span class="nx">disable</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC459'>			<span class="nx">removeListeners</span><span class="p">();</span></div><div class='line' id='LC460'>			<span class="k">return</span> <span class="nx">$element</span><span class="p">;</span></div><div class='line' id='LC461'>		<span class="p">};</span></div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>		<span class="cm">/**</span></div><div class='line' id='LC464'><span class="cm">		* Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.</span></div><div class='line' id='LC465'><span class="cm">		* @function</span></div><div class='line' id='LC466'><span class="cm">		* @name $.fn.swipe#destroy</span></div><div class='line' id='LC467'><span class="cm">		* @return {DOMNode} The Dom element that was registered with TouchSwipe </span></div><div class='line' id='LC468'><span class="cm">		* @example $(&quot;#element&quot;).swipe(&quot;destroy&quot;);</span></div><div class='line' id='LC469'><span class="cm">		*/</span></div><div class='line' id='LC470'>		<span class="k">this</span><span class="p">.</span><span class="nx">destroy</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC471'>			<span class="nx">removeListeners</span><span class="p">();</span></div><div class='line' id='LC472'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">PLUGIN_NS</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC473'>			<span class="k">return</span> <span class="nx">$element</span><span class="p">;</span></div><div class='line' id='LC474'>		<span class="p">};</span></div><div class='line' id='LC475'><br/></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC478'><span class="cm">         * Allows run time updating of the swipe configuration options.</span></div><div class='line' id='LC479'><span class="cm">         * @function</span></div><div class='line' id='LC480'><span class="cm">    	 * @name $.fn.swipe#option</span></div><div class='line' id='LC481'><span class="cm">    	 * @param {String} property The option property to get or set</span></div><div class='line' id='LC482'><span class="cm">         * @param {Object} [value] The value to set the property to</span></div><div class='line' id='LC483'><span class="cm">		 * @return {Object} If only a property name is passed, then that property value is returned.</span></div><div class='line' id='LC484'><span class="cm">		 * @example $(&quot;#element&quot;).swipe(&quot;option&quot;, &quot;threshold&quot;); // return the threshold</span></div><div class='line' id='LC485'><span class="cm">         * @example $(&quot;#element&quot;).swipe(&quot;option&quot;, &quot;threshold&quot;, 100); // set the threshold after init</span></div><div class='line' id='LC486'><span class="cm">         * @see $.fn.swipe.defaults</span></div><div class='line' id='LC487'><span class="cm">         *</span></div><div class='line' id='LC488'><span class="cm">         */</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">option</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">property</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="nx">property</span><span class="p">]</span><span class="o">!==</span><span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">value</span><span class="o">===</span><span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">options</span><span class="p">[</span><span class="nx">property</span><span class="p">];</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">[</span><span class="nx">property</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;Option &#39;</span> <span class="o">+</span> <span class="nx">property</span> <span class="o">+</span> <span class="s1">&#39; does not exist on jQuery.swipe.options&#39;</span><span class="p">);</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC502'><br/></div><div class='line' id='LC503'>		<span class="c1">//</span></div><div class='line' id='LC504'>		<span class="c1">// Private methods</span></div><div class='line' id='LC505'>		<span class="c1">//</span></div><div class='line' id='LC506'><br/></div><div class='line' id='LC507'>		<span class="c1">//</span></div><div class='line' id='LC508'>		<span class="c1">// EVENTS</span></div><div class='line' id='LC509'>		<span class="c1">//</span></div><div class='line' id='LC510'>		<span class="cm">/**</span></div><div class='line' id='LC511'><span class="cm">		* Event handler for a touch start event.</span></div><div class='line' id='LC512'><span class="cm">		* Stops the default click event from triggering and stores where we touched</span></div><div class='line' id='LC513'><span class="cm">		* @inner</span></div><div class='line' id='LC514'><span class="cm">		* @param {object} jqEvent The normalised jQuery event object.</span></div><div class='line' id='LC515'><span class="cm">		*/</span></div><div class='line' id='LC516'>		<span class="kd">function</span> <span class="nx">touchStart</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC517'>			<span class="c1">//If we already in a touch event (a finger already in use) then ignore subsequent ones..</span></div><div class='line' id='LC518'>			<span class="k">if</span><span class="p">(</span> <span class="nx">getTouchInProgress</span><span class="p">()</span> <span class="p">)</span></div><div class='line' id='LC519'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC520'><br/></div><div class='line' id='LC521'>			<span class="c1">//Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON&#39;T swipe</span></div><div class='line' id='LC522'>			<span class="k">if</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">excludedElements</span><span class="p">,</span> <span class="nx">$element</span> <span class="p">).</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span> <span class="p">)</span> </div><div class='line' id='LC523'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>			<span class="c1">//As we use Jquery bind for events, we need to target the original event object</span></div><div class='line' id='LC526'>			<span class="c1">//If these events are being programmatically triggered, we don&#39;t have an original event object, so use the Jq one.</span></div><div class='line' id='LC527'>			<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">jqEvent</span><span class="p">.</span><span class="nx">originalEvent</span> <span class="o">?</span> <span class="nx">jqEvent</span><span class="p">.</span><span class="nx">originalEvent</span> <span class="o">:</span> <span class="nx">jqEvent</span><span class="p">;</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>			<span class="kd">var</span> <span class="nx">ret</span><span class="p">,</span></div><div class='line' id='LC530'>				<span class="nx">evt</span> <span class="o">=</span> <span class="nx">SUPPORTS_TOUCH</span> <span class="o">?</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">:</span> <span class="nx">event</span><span class="p">;</span></div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'>			<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_START</span><span class="p">;</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>			<span class="c1">//If we support touches, get the finger count</span></div><div class='line' id='LC535'>			<span class="k">if</span> <span class="p">(</span><span class="nx">SUPPORTS_TOUCH</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC536'>				<span class="c1">// get the total number of fingers touching the screen</span></div><div class='line' id='LC537'>				<span class="nx">fingerCount</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC538'>			<span class="p">}</span></div><div class='line' id='LC539'>			<span class="c1">//Else this is the desktop, so stop the browser from dragging the image</span></div><div class='line' id='LC540'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC541'>				<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span> <span class="c1">//call this on jq event so we are cross browser</span></div><div class='line' id='LC542'>			<span class="p">}</span></div><div class='line' id='LC543'><br/></div><div class='line' id='LC544'>			<span class="c1">//clear vars..</span></div><div class='line' id='LC545'>			<span class="nx">distance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC546'>			<span class="nx">direction</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC547'>			<span class="nx">pinchDirection</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC548'>			<span class="nx">duration</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC549'>			<span class="nx">startTouchesDistance</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC550'>			<span class="nx">endTouchesDistance</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC551'>			<span class="nx">pinchZoom</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC552'>			<span class="nx">pinchDistance</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC553'>			<span class="nx">fingerData</span><span class="o">=</span><span class="nx">createAllFingerData</span><span class="p">();</span></div><div class='line' id='LC554'>			<span class="nx">maximumsMap</span><span class="o">=</span><span class="nx">createMaximumsData</span><span class="p">();</span></div><div class='line' id='LC555'>			<span class="nx">cancelMultiFingerRelease</span><span class="p">();</span></div><div class='line' id='LC556'><br/></div><div class='line' id='LC557'><br/></div><div class='line' id='LC558'>			<span class="c1">// check the number of fingers is what we are looking for, or we are capturing pinches</span></div><div class='line' id='LC559'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">SUPPORTS_TOUCH</span> <span class="o">||</span> <span class="p">(</span><span class="nx">fingerCount</span> <span class="o">===</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">===</span> <span class="nx">ALL_FINGERS</span><span class="p">)</span> <span class="o">||</span> <span class="nx">hasPinches</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC560'>				<span class="c1">// get the coordinates of the touch</span></div><div class='line' id='LC561'>				<span class="nx">createFingerData</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">evt</span> <span class="p">);</span></div><div class='line' id='LC562'>				<span class="nx">startTime</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">();</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>				<span class="k">if</span><span class="p">(</span><span class="nx">fingerCount</span><span class="o">==</span><span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC565'>					<span class="c1">//Keep track of the initial pinch distance, so we can calculate the diff later</span></div><div class='line' id='LC566'>					<span class="c1">//Store second finger data as start</span></div><div class='line' id='LC567'>					<span class="nx">createFingerData</span><span class="p">(</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC568'>					<span class="nx">startTouchesDistance</span> <span class="o">=</span> <span class="nx">endTouchesDistance</span> <span class="o">=</span> <span class="nx">calculateTouchesDistance</span><span class="p">(</span><span class="nx">fingerData</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">start</span><span class="p">,</span> <span class="nx">fingerData</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC569'>				<span class="p">}</span></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeStatus</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchStatus</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC573'>				<span class="p">}</span></div><div class='line' id='LC574'>			<span class="p">}</span></div><div class='line' id='LC575'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC576'>				<span class="c1">//A touch with more or less than the fingers we are looking for, so cancel</span></div><div class='line' id='LC577'>				<span class="nx">ret</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> </div><div class='line' id='LC578'>			<span class="p">}</span></div><div class='line' id='LC579'><br/></div><div class='line' id='LC580'>			<span class="c1">//If we have a return value from the users handler, then return and cancel</span></div><div class='line' id='LC581'>			<span class="k">if</span> <span class="p">(</span><span class="nx">ret</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC582'>				<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC583'>				<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC584'>				<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC585'>			<span class="p">}</span></div><div class='line' id='LC586'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC587'>				<span class="nx">setTouchInProgress</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC588'>			<span class="p">}</span></div><div class='line' id='LC589'><br/></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC591'>		<span class="p">};</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'><br/></div><div class='line' id='LC595'>		<span class="cm">/**</span></div><div class='line' id='LC596'><span class="cm">		* Event handler for a touch move event. </span></div><div class='line' id='LC597'><span class="cm">		* If we change fingers during move, then cancel the event</span></div><div class='line' id='LC598'><span class="cm">		* @inner</span></div><div class='line' id='LC599'><span class="cm">		* @param {object} jqEvent The normalised jQuery event object.</span></div><div class='line' id='LC600'><span class="cm">		*/</span></div><div class='line' id='LC601'>		<span class="kd">function</span> <span class="nx">touchMove</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC602'><br/></div><div class='line' id='LC603'>			<span class="c1">//As we use Jquery bind for events, we need to target the original event object</span></div><div class='line' id='LC604'>			<span class="c1">//If these events are being programmatically triggered, we don&#39;t have an original event object, so use the Jq one.</span></div><div class='line' id='LC605'>			<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">jqEvent</span><span class="p">.</span><span class="nx">originalEvent</span> <span class="o">?</span> <span class="nx">jqEvent</span><span class="p">.</span><span class="nx">originalEvent</span> <span class="o">:</span> <span class="nx">jqEvent</span><span class="p">;</span></div><div class='line' id='LC606'><br/></div><div class='line' id='LC607'>			<span class="c1">//If we are ending, cancelling, or within the threshold of 2 fingers being released, don&#39;t track anything..</span></div><div class='line' id='LC608'>			<span class="k">if</span> <span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_END</span> <span class="o">||</span> <span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_CANCEL</span> <span class="o">||</span> <span class="nx">inMultiFingerRelease</span><span class="p">())</span></div><div class='line' id='LC609'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC610'><br/></div><div class='line' id='LC611'>			<span class="kd">var</span> <span class="nx">ret</span><span class="p">,</span></div><div class='line' id='LC612'>				<span class="nx">evt</span> <span class="o">=</span> <span class="nx">SUPPORTS_TOUCH</span> <span class="o">?</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">:</span> <span class="nx">event</span><span class="p">;</span></div><div class='line' id='LC613'><br/></div><div class='line' id='LC614'><br/></div><div class='line' id='LC615'>			<span class="c1">//Update the  finger data </span></div><div class='line' id='LC616'>			<span class="kd">var</span> <span class="nx">currentFinger</span> <span class="o">=</span> <span class="nx">updateFingerData</span><span class="p">(</span><span class="nx">evt</span><span class="p">);</span></div><div class='line' id='LC617'>			<span class="nx">endTime</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">();</span></div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'>			<span class="k">if</span> <span class="p">(</span><span class="nx">SUPPORTS_TOUCH</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC620'>				<span class="nx">fingerCount</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC621'>			<span class="p">}</span></div><div class='line' id='LC622'><br/></div><div class='line' id='LC623'>			<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_MOVE</span><span class="p">;</span></div><div class='line' id='LC624'><br/></div><div class='line' id='LC625'>			<span class="c1">//If we have 2 fingers get Touches distance as well</span></div><div class='line' id='LC626'>			<span class="k">if</span><span class="p">(</span><span class="nx">fingerCount</span><span class="o">==</span><span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC627'><br/></div><div class='line' id='LC628'>				<span class="c1">//Keep track of the initial pinch distance, so we can calculate the diff later</span></div><div class='line' id='LC629'>				<span class="c1">//We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers</span></div><div class='line' id='LC630'>				<span class="k">if</span><span class="p">(</span><span class="nx">startTouchesDistance</span><span class="o">==</span><span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC631'>					<span class="c1">//Create second finger if this is the first time...</span></div><div class='line' id='LC632'>					<span class="nx">createFingerData</span><span class="p">(</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC633'><br/></div><div class='line' id='LC634'>					<span class="nx">startTouchesDistance</span> <span class="o">=</span> <span class="nx">endTouchesDistance</span> <span class="o">=</span> <span class="nx">calculateTouchesDistance</span><span class="p">(</span><span class="nx">fingerData</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">start</span><span class="p">,</span> <span class="nx">fingerData</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC635'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC636'>					<span class="c1">//Else just update the second finger</span></div><div class='line' id='LC637'>					<span class="nx">updateFingerData</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>					<span class="nx">endTouchesDistance</span> <span class="o">=</span> <span class="nx">calculateTouchesDistance</span><span class="p">(</span><span class="nx">fingerData</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">end</span><span class="p">,</span> <span class="nx">fingerData</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC640'>					<span class="nx">pinchDirection</span> <span class="o">=</span> <span class="nx">calculatePinchDirection</span><span class="p">(</span><span class="nx">fingerData</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">end</span><span class="p">,</span> <span class="nx">fingerData</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC641'>				<span class="p">}</span></div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'><br/></div><div class='line' id='LC644'>				<span class="nx">pinchZoom</span> <span class="o">=</span> <span class="nx">calculatePinchZoom</span><span class="p">(</span><span class="nx">startTouchesDistance</span><span class="p">,</span> <span class="nx">endTouchesDistance</span><span class="p">);</span></div><div class='line' id='LC645'>				<span class="nx">pinchDistance</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">startTouchesDistance</span> <span class="o">-</span> <span class="nx">endTouchesDistance</span><span class="p">);</span></div><div class='line' id='LC646'>			<span class="p">}</span></div><div class='line' id='LC647'><br/></div><div class='line' id='LC648'><br/></div><div class='line' id='LC649'>			<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">fingerCount</span> <span class="o">===</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">===</span> <span class="nx">ALL_FINGERS</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="nx">SUPPORTS_TOUCH</span> <span class="o">||</span> <span class="nx">hasPinches</span><span class="p">()</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'>				<span class="nx">direction</span> <span class="o">=</span> <span class="nx">calculateDirection</span><span class="p">(</span><span class="nx">currentFinger</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">currentFinger</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC652'><br/></div><div class='line' id='LC653'>				<span class="c1">//Check if we need to prevent default event (page scroll / pinch zoom) or not</span></div><div class='line' id='LC654'>				<span class="nx">validateDefaultEvent</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">,</span> <span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC655'><br/></div><div class='line' id='LC656'>				<span class="c1">//Distance and duration are all off the main finger</span></div><div class='line' id='LC657'>				<span class="nx">distance</span> <span class="o">=</span> <span class="nx">calculateDistance</span><span class="p">(</span><span class="nx">currentFinger</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">currentFinger</span><span class="p">.</span><span class="nx">end</span><span class="p">);</span></div><div class='line' id='LC658'>				<span class="nx">duration</span> <span class="o">=</span> <span class="nx">calculateDuration</span><span class="p">();</span></div><div class='line' id='LC659'><br/></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Cache the maximum distance we made in this direction</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setMaxDistance</span><span class="p">(</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">);</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'><br/></div><div class='line' id='LC664'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeStatus</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchStatus</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC665'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC666'>				<span class="p">}</span></div><div class='line' id='LC667'><br/></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>				<span class="c1">//If we trigger end events when threshold are met, or trigger events when touch leaves element</span></div><div class='line' id='LC670'>				<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchEnd</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchLeave</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'><br/></div><div class='line' id='LC672'>					<span class="kd">var</span> <span class="nx">inBounds</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC673'><br/></div><div class='line' id='LC674'>					<span class="c1">//If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)</span></div><div class='line' id='LC675'>					<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchLeave</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC676'>						<span class="kd">var</span> <span class="nx">bounds</span> <span class="o">=</span> <span class="nx">getbounds</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC677'>						<span class="nx">inBounds</span> <span class="o">=</span> <span class="nx">isInBounds</span><span class="p">(</span> <span class="nx">currentFinger</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">bounds</span> <span class="p">);</span></div><div class='line' id='LC678'>					<span class="p">}</span></div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'>					<span class="c1">//Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..</span></div><div class='line' id='LC681'>					<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchEnd</span> <span class="o">&amp;&amp;</span> <span class="nx">inBounds</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC682'>						<span class="nx">phase</span> <span class="o">=</span> <span class="nx">getNextPhase</span><span class="p">(</span> <span class="nx">PHASE_MOVE</span> <span class="p">);</span></div><div class='line' id='LC683'>					<span class="p">}</span> </div><div class='line' id='LC684'>					<span class="c1">//We end if out of bounds here, so set current phase to END, and check if its modified </span></div><div class='line' id='LC685'>					<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchLeave</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">inBounds</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC686'>						<span class="nx">phase</span> <span class="o">=</span> <span class="nx">getNextPhase</span><span class="p">(</span> <span class="nx">PHASE_END</span> <span class="p">);</span></div><div class='line' id='LC687'>					<span class="p">}</span></div><div class='line' id='LC688'><br/></div><div class='line' id='LC689'>					<span class="k">if</span><span class="p">(</span><span class="nx">phase</span><span class="o">==</span><span class="nx">PHASE_CANCEL</span> <span class="o">||</span> <span class="nx">phase</span><span class="o">==</span><span class="nx">PHASE_END</span><span class="p">)</span>	<span class="p">{</span></div><div class='line' id='LC690'>						<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC691'>					<span class="p">}</span>				</div><div class='line' id='LC692'>				<span class="p">}</span></div><div class='line' id='LC693'>			<span class="p">}</span></div><div class='line' id='LC694'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC695'>				<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC696'>				<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC697'>			<span class="p">}</span></div><div class='line' id='LC698'><br/></div><div class='line' id='LC699'>			<span class="k">if</span> <span class="p">(</span><span class="nx">ret</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC700'>				<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC701'>				<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC702'>			<span class="p">}</span></div><div class='line' id='LC703'>		<span class="p">}</span></div><div class='line' id='LC704'><br/></div><div class='line' id='LC705'><br/></div><div class='line' id='LC706'><br/></div><div class='line' id='LC707'>		<span class="cm">/**</span></div><div class='line' id='LC708'><span class="cm">		* Event handler for a touch end event. </span></div><div class='line' id='LC709'><span class="cm">		* Calculate the direction and trigger events</span></div><div class='line' id='LC710'><span class="cm">		* @inner</span></div><div class='line' id='LC711'><span class="cm">		* @param {object} jqEvent The normalised jQuery event object.</span></div><div class='line' id='LC712'><span class="cm">		*/</span></div><div class='line' id='LC713'>		<span class="kd">function</span> <span class="nx">touchEnd</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC714'>			<span class="c1">//As we use Jquery bind for events, we need to target the original event object</span></div><div class='line' id='LC715'>			<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">jqEvent</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">;</span></div><div class='line' id='LC716'><br/></div><div class='line' id='LC717'><br/></div><div class='line' id='LC718'>			<span class="c1">//If we are still in a touch with another finger return</span></div><div class='line' id='LC719'>			<span class="c1">//This allows us to wait a fraction and see if the other finger comes up, if it does within the threshold, then we treat it as a multi release, not a single release.</span></div><div class='line' id='LC720'>			<span class="k">if</span> <span class="p">(</span><span class="nx">SUPPORTS_TOUCH</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC721'>				<span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC722'>					<span class="nx">startMultiFingerRelease</span><span class="p">();</span></div><div class='line' id='LC723'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC724'>				<span class="p">}</span></div><div class='line' id='LC725'>			<span class="p">}</span></div><div class='line' id='LC726'><br/></div><div class='line' id='LC727'>			<span class="c1">//If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.</span></div><div class='line' id='LC728'>			<span class="c1">//This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1</span></div><div class='line' id='LC729'>			<span class="k">if</span><span class="p">(</span><span class="nx">inMultiFingerRelease</span><span class="p">())</span> <span class="p">{</span>	</div><div class='line' id='LC730'>				<span class="nx">fingerCount</span><span class="o">=</span><span class="nx">previousTouchFingerCount</span><span class="p">;</span></div><div class='line' id='LC731'>			<span class="p">}</span>	</div><div class='line' id='LC732'><br/></div><div class='line' id='LC733'>			<span class="c1">//call this on jq event so we are cross browser </span></div><div class='line' id='LC734'>			<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span> </div><div class='line' id='LC735'><br/></div><div class='line' id='LC736'>			<span class="c1">//Set end of swipe</span></div><div class='line' id='LC737'>			<span class="nx">endTime</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">();</span></div><div class='line' id='LC738'><br/></div><div class='line' id='LC739'>			<span class="c1">//Get duration incase move was never fired</span></div><div class='line' id='LC740'>			<span class="nx">duration</span> <span class="o">=</span> <span class="nx">calculateDuration</span><span class="p">();</span></div><div class='line' id='LC741'><br/></div><div class='line' id='LC742'>			<span class="c1">//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase</span></div><div class='line' id='LC743'>			<span class="k">if</span><span class="p">(</span><span class="nx">didSwipeBackToCancel</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC744'>			    <span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC746'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchEnd</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchEnd</span> <span class="o">==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_MOVE</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC747'>				<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_END</span><span class="p">;</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC749'>			<span class="p">}</span></div><div class='line' id='LC750'>			<span class="c1">//Special cases - A tap should always fire on touch end regardless,</span></div><div class='line' id='LC751'>			<span class="c1">//So here we manually trigger the tap end handler by itself</span></div><div class='line' id='LC752'>			<span class="c1">//We dont run trigger handler as it will re-trigger events that may have fired already</span></div><div class='line' id='LC753'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchEnd</span> <span class="o">&amp;&amp;</span> <span class="nx">hasTap</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Trigger the pinch events...</span></div><div class='line' id='LC755'>			    <span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_END</span><span class="p">;</span></div><div class='line' id='LC756'>			    <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">TAP</span><span class="p">);</span></div><div class='line' id='LC757'>			<span class="p">}</span></div><div class='line' id='LC758'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_MOVE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC759'>				<span class="nx">phase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC760'>				<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC761'>			<span class="p">}</span></div><div class='line' id='LC762'><br/></div><div class='line' id='LC763'>			<span class="nx">setTouchInProgress</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC766'>		<span class="p">}</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'><br/></div><div class='line' id='LC769'><br/></div><div class='line' id='LC770'>		<span class="cm">/**</span></div><div class='line' id='LC771'><span class="cm">		* Event handler for a touch cancel event. </span></div><div class='line' id='LC772'><span class="cm">		* Clears current vars</span></div><div class='line' id='LC773'><span class="cm">		* @inner</span></div><div class='line' id='LC774'><span class="cm">		*/</span></div><div class='line' id='LC775'>		<span class="kd">function</span> <span class="nx">touchCancel</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC776'>			<span class="c1">// reset the variables back to default values</span></div><div class='line' id='LC777'>			<span class="nx">fingerCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC778'>			<span class="nx">endTime</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC779'>			<span class="nx">startTime</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC780'>			<span class="nx">startTouchesDistance</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC781'>			<span class="nx">endTouchesDistance</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC782'>			<span class="nx">pinchZoom</span><span class="o">=</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC783'><br/></div><div class='line' id='LC784'>			<span class="c1">//If we were in progress of tracking a possible multi touch end, then re set it.</span></div><div class='line' id='LC785'>			<span class="nx">cancelMultiFingerRelease</span><span class="p">();</span></div><div class='line' id='LC786'><br/></div><div class='line' id='LC787'>			<span class="nx">setTouchInProgress</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC788'>		<span class="p">}</span></div><div class='line' id='LC789'><br/></div><div class='line' id='LC790'><br/></div><div class='line' id='LC791'>		<span class="cm">/**</span></div><div class='line' id='LC792'><span class="cm">		* Event handler for a touch leave event. </span></div><div class='line' id='LC793'><span class="cm">		* This is only triggered on desktops, in touch we work this out manually</span></div><div class='line' id='LC794'><span class="cm">		* as the touchleave event is not supported in webkit</span></div><div class='line' id='LC795'><span class="cm">		* @inner</span></div><div class='line' id='LC796'><span class="cm">		*/</span></div><div class='line' id='LC797'>		<span class="kd">function</span> <span class="nx">touchLeave</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC798'>			<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">jqEvent</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">;</span></div><div class='line' id='LC799'><br/></div><div class='line' id='LC800'>			<span class="c1">//If we have the trigger on leave property set....</span></div><div class='line' id='LC801'>			<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchLeave</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC802'>				<span class="nx">phase</span> <span class="o">=</span> <span class="nx">getNextPhase</span><span class="p">(</span> <span class="nx">PHASE_END</span> <span class="p">);</span></div><div class='line' id='LC803'>				<span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">);</span></div><div class='line' id='LC804'>			<span class="p">}</span></div><div class='line' id='LC805'>		<span class="p">}</span></div><div class='line' id='LC806'><br/></div><div class='line' id='LC807'>		<span class="cm">/**</span></div><div class='line' id='LC808'><span class="cm">		* Removes all listeners that were associated with the plugin</span></div><div class='line' id='LC809'><span class="cm">		* @inner</span></div><div class='line' id='LC810'><span class="cm">		*/</span></div><div class='line' id='LC811'>		<span class="kd">function</span> <span class="nx">removeListeners</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC812'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">START_EV</span><span class="p">,</span> <span class="nx">touchStart</span><span class="p">);</span></div><div class='line' id='LC813'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">CANCEL_EV</span><span class="p">,</span> <span class="nx">touchCancel</span><span class="p">);</span></div><div class='line' id='LC814'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">MOVE_EV</span><span class="p">,</span> <span class="nx">touchMove</span><span class="p">);</span></div><div class='line' id='LC815'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">END_EV</span><span class="p">,</span> <span class="nx">touchEnd</span><span class="p">);</span></div><div class='line' id='LC816'><br/></div><div class='line' id='LC817'>			<span class="c1">//we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit</span></div><div class='line' id='LC818'>			<span class="k">if</span><span class="p">(</span><span class="nx">LEAVE_EV</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC819'>				<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">LEAVE_EV</span><span class="p">,</span> <span class="nx">touchLeave</span><span class="p">);</span></div><div class='line' id='LC820'>			<span class="p">}</span></div><div class='line' id='LC821'><br/></div><div class='line' id='LC822'>			<span class="nx">setTouchInProgress</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC823'>		<span class="p">}</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'><br/></div><div class='line' id='LC826'>		<span class="cm">/**</span></div><div class='line' id='LC827'><span class="cm">		 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.</span></div><div class='line' id='LC828'><span class="cm">		 */</span></div><div class='line' id='LC829'>		<span class="kd">function</span> <span class="nx">getNextPhase</span><span class="p">(</span><span class="nx">currentPhase</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC830'><br/></div><div class='line' id='LC831'>			<span class="kd">var</span> <span class="nx">nextPhase</span> <span class="o">=</span> <span class="nx">currentPhase</span><span class="p">;</span></div><div class='line' id='LC832'><br/></div><div class='line' id='LC833'>			<span class="c1">// Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)</span></div><div class='line' id='LC834'>			<span class="kd">var</span> <span class="nx">validTime</span> <span class="o">=</span> <span class="nx">validateSwipeTime</span><span class="p">();</span></div><div class='line' id='LC835'>			<span class="kd">var</span> <span class="nx">validDistance</span> <span class="o">=</span> <span class="nx">validateSwipeDistance</span><span class="p">();</span></div><div class='line' id='LC836'>			<span class="kd">var</span> <span class="nx">didCancel</span> <span class="o">=</span> <span class="nx">didSwipeBackToCancel</span><span class="p">();</span></div><div class='line' id='LC837'><br/></div><div class='line' id='LC838'>			<span class="c1">//If we have exceeded our time, then cancel	</span></div><div class='line' id='LC839'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">validTime</span> <span class="o">||</span> <span class="nx">didCancel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC840'>				<span class="nx">nextPhase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC841'>			<span class="p">}</span></div><div class='line' id='LC842'>			<span class="c1">//Else if we are moving, and have reached distance then end</span></div><div class='line' id='LC843'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">validDistance</span> <span class="o">&amp;&amp;</span> <span class="nx">currentPhase</span> <span class="o">==</span> <span class="nx">PHASE_MOVE</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchEnd</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchLeave</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC844'>				<span class="nx">nextPhase</span> <span class="o">=</span> <span class="nx">PHASE_END</span><span class="p">;</span></div><div class='line' id='LC845'>			<span class="p">}</span> </div><div class='line' id='LC846'>			<span class="c1">//Else if we have ended by leaving and didn&#39;t reach distance, then cancel</span></div><div class='line' id='LC847'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">validDistance</span> <span class="o">&amp;&amp;</span> <span class="nx">currentPhase</span><span class="o">==</span><span class="nx">PHASE_END</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">triggerOnTouchLeave</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC848'>				<span class="nx">nextPhase</span> <span class="o">=</span> <span class="nx">PHASE_CANCEL</span><span class="p">;</span></div><div class='line' id='LC849'>			<span class="p">}</span></div><div class='line' id='LC850'><br/></div><div class='line' id='LC851'>			<span class="k">return</span> <span class="nx">nextPhase</span><span class="p">;</span></div><div class='line' id='LC852'>		<span class="p">}</span></div><div class='line' id='LC853'><br/></div><div class='line' id='LC854'><br/></div><div class='line' id='LC855'>		<span class="cm">/**</span></div><div class='line' id='LC856'><span class="cm">		* Trigger the relevant event handler</span></div><div class='line' id='LC857'><span class="cm">		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, &quot;left&quot;, &quot;right&quot;, &quot;up&quot;, or &quot;down&quot;</span></div><div class='line' id='LC858'><span class="cm">		* @param {object} event the original event object</span></div><div class='line' id='LC859'><span class="cm">		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}</span></div><div class='line' id='LC860'><span class="cm">		* @inner</span></div><div class='line' id='LC861'><span class="cm">		*/</span></div><div class='line' id='LC862'>		<span class="kd">function</span> <span class="nx">triggerHandler</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC863'><br/></div><div class='line' id='LC864'>			<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC865'><br/></div><div class='line' id='LC866'>			<span class="c1">// SWIPE GESTURES</span></div><div class='line' id='LC867'>			<span class="k">if</span><span class="p">(</span><span class="nx">didSwipe</span><span class="p">()</span> <span class="o">||</span> <span class="nx">hasSwipes</span><span class="p">())</span> <span class="p">{</span> <span class="c1">//hasSwipes as status needs to fire even if swipe is invalid</span></div><div class='line' id='LC868'>				<span class="c1">//Trigger the swipe events...</span></div><div class='line' id='LC869'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">SWIPE</span><span class="p">);</span></div><div class='line' id='LC870'>			<span class="p">}</span> </div><div class='line' id='LC871'><br/></div><div class='line' id='LC872'>			<span class="c1">// PINCH GESTURES (if the above didn&#39;t cancel)</span></div><div class='line' id='LC873'>			<span class="k">else</span> <span class="k">if</span><span class="p">((</span><span class="nx">didPinch</span><span class="p">()</span> <span class="o">||</span> <span class="nx">hasPinches</span><span class="p">())</span> <span class="o">&amp;&amp;</span> <span class="nx">ret</span><span class="o">!==</span><span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC874'>				<span class="c1">//Trigger the pinch events...</span></div><div class='line' id='LC875'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">PINCH</span><span class="p">);</span></div><div class='line' id='LC876'>			<span class="p">}</span></div><div class='line' id='LC877'><br/></div><div class='line' id='LC878'>			<span class="c1">// CLICK / TAP (if the above didn&#39;t cancel)</span></div><div class='line' id='LC879'>			<span class="k">if</span><span class="p">(</span><span class="nx">didDoubleTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">ret</span><span class="o">!==</span><span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC880'>				<span class="c1">//Trigger the tap events...</span></div><div class='line' id='LC881'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">DOUBLE_TAP</span><span class="p">);</span></div><div class='line' id='LC882'>			<span class="p">}</span></div><div class='line' id='LC883'><br/></div><div class='line' id='LC884'>			<span class="c1">// CLICK / TAP (if the above didn&#39;t cancel)</span></div><div class='line' id='LC885'>			<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">didLongTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">ret</span><span class="o">!==</span><span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>				<span class="c1">//Trigger the tap events...</span></div><div class='line' id='LC887'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">LONG_TAP</span><span class="p">);</span></div><div class='line' id='LC888'>			<span class="p">}</span></div><div class='line' id='LC889'><br/></div><div class='line' id='LC890'>			<span class="c1">// CLICK / TAP (if the above didn&#39;t cancel)</span></div><div class='line' id='LC891'>			<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">didTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">ret</span><span class="o">!==</span><span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC892'>				<span class="c1">//Trigger the tap event..</span></div><div class='line' id='LC893'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">TAP</span><span class="p">);</span></div><div class='line' id='LC894'>	    	<span class="p">}</span></div><div class='line' id='LC895'><br/></div><div class='line' id='LC896'><br/></div><div class='line' id='LC897'><br/></div><div class='line' id='LC898'>			<span class="c1">// If we are cancelling the gesture, then manually trigger the reset handler</span></div><div class='line' id='LC899'>			<span class="k">if</span> <span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_CANCEL</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC900'>				<span class="nx">touchCancel</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC901'>			<span class="p">}</span></div><div class='line' id='LC902'><br/></div><div class='line' id='LC903'>			<span class="c1">// If we are ending the gesture, then manually trigger the reset handler IF all fingers are off</span></div><div class='line' id='LC904'>			<span class="k">if</span><span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_END</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC905'>				<span class="c1">//If we support touch, then check that all fingers are off before we cancel</span></div><div class='line' id='LC906'>				<span class="k">if</span> <span class="p">(</span><span class="nx">SUPPORTS_TOUCH</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC907'>					<span class="k">if</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span><span class="o">==</span><span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC908'>						<span class="nx">touchCancel</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span>	</div><div class='line' id='LC909'>					<span class="p">}</span></div><div class='line' id='LC910'>				<span class="p">}</span> </div><div class='line' id='LC911'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC912'>					<span class="nx">touchCancel</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC913'>				<span class="p">}</span></div><div class='line' id='LC914'>			<span class="p">}</span></div><div class='line' id='LC915'><br/></div><div class='line' id='LC916'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC917'>		<span class="p">}</span></div><div class='line' id='LC918'><br/></div><div class='line' id='LC919'><br/></div><div class='line' id='LC920'><br/></div><div class='line' id='LC921'>		<span class="cm">/**</span></div><div class='line' id='LC922'><span class="cm">		* Trigger the relevant event handler</span></div><div class='line' id='LC923'><span class="cm">		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, &quot;left&quot;, &quot;right&quot;, &quot;up&quot;, or &quot;down&quot;</span></div><div class='line' id='LC924'><span class="cm">		* @param {object} event the original event object</span></div><div class='line' id='LC925'><span class="cm">		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}</span></div><div class='line' id='LC926'><span class="cm">		* @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}</span></div><div class='line' id='LC927'><span class="cm">		* @return Boolean False, to indicate that the event should stop propagation, or void.</span></div><div class='line' id='LC928'><span class="cm">		* @inner</span></div><div class='line' id='LC929'><span class="cm">		*/</span></div><div class='line' id='LC930'>		<span class="kd">function</span> <span class="nx">triggerHandlerForGesture</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">gesture</span><span class="p">)</span> <span class="p">{</span>	</div><div class='line' id='LC931'><br/></div><div class='line' id='LC932'>			<span class="kd">var</span> <span class="nx">ret</span><span class="o">=</span><span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC933'><br/></div><div class='line' id='LC934'>			<span class="c1">//SWIPES....</span></div><div class='line' id='LC935'>			<span class="k">if</span><span class="p">(</span><span class="nx">gesture</span><span class="o">==</span><span class="nx">SWIPE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC936'>				<span class="c1">//Trigger status every time..</span></div><div class='line' id='LC937'><br/></div><div class='line' id='LC938'>				<span class="c1">//Trigger the event...</span></div><div class='line' id='LC939'>				<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipeStatus&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">phase</span><span class="p">,</span> <span class="nx">direction</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">distance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">]);</span></div><div class='line' id='LC940'><br/></div><div class='line' id='LC941'>				<span class="c1">//Fire the callback</span></div><div class='line' id='LC942'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeStatus</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC943'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeStatus</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">direction</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">distance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">);</span></div><div class='line' id='LC944'>					<span class="c1">//If the status cancels, then dont run the subsequent event handlers..</span></div><div class='line' id='LC945'>					<span class="k">if</span><span class="p">(</span><span class="nx">ret</span><span class="o">===</span><span class="kc">false</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC946'>				<span class="p">}</span></div><div class='line' id='LC947'><br/></div><div class='line' id='LC948'><br/></div><div class='line' id='LC949'><br/></div><div class='line' id='LC950'><br/></div><div class='line' id='LC951'>				<span class="k">if</span> <span class="p">(</span><span class="nx">phase</span> <span class="o">==</span> <span class="nx">PHASE_END</span> <span class="o">&amp;&amp;</span> <span class="nx">validateSwipe</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC952'>					<span class="c1">//Fire the catch all event</span></div><div class='line' id='LC953'>					<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipe&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">]);</span></div><div class='line' id='LC954'><br/></div><div class='line' id='LC955'>					<span class="c1">//Fire catch all callback</span></div><div class='line' id='LC956'>					<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipe</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC957'>						<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipe</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">);</span></div><div class='line' id='LC958'>						<span class="c1">//If the status cancels, then dont run the subsequent event handlers..</span></div><div class='line' id='LC959'>						<span class="k">if</span><span class="p">(</span><span class="nx">ret</span><span class="o">===</span><span class="kc">false</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC960'>					<span class="p">}</span></div><div class='line' id='LC961'><br/></div><div class='line' id='LC962'>					<span class="c1">//trigger direction specific event handlers	</span></div><div class='line' id='LC963'>					<span class="k">switch</span> <span class="p">(</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC964'>						<span class="k">case</span> <span class="nx">LEFT</span><span class="o">:</span></div><div class='line' id='LC965'>							<span class="c1">//Trigger the event</span></div><div class='line' id='LC966'>							<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipeLeft&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">]);</span></div><div class='line' id='LC967'><br/></div><div class='line' id='LC968'>					        <span class="c1">//Fire the callback</span></div><div class='line' id='LC969'>							<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC970'>								<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeLeft</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">);</span></div><div class='line' id='LC971'>							<span class="p">}</span></div><div class='line' id='LC972'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC973'><br/></div><div class='line' id='LC974'>						<span class="k">case</span> <span class="nx">RIGHT</span><span class="o">:</span></div><div class='line' id='LC975'>							<span class="c1">//Trigger the event</span></div><div class='line' id='LC976'>					        <span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipeRight&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">]);</span></div><div class='line' id='LC977'><br/></div><div class='line' id='LC978'>					        <span class="c1">//Fire the callback</span></div><div class='line' id='LC979'>							<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeRight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC980'>								<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeRight</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">);</span></div><div class='line' id='LC981'>							<span class="p">}</span></div><div class='line' id='LC982'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC983'><br/></div><div class='line' id='LC984'>						<span class="k">case</span> <span class="nx">UP</span><span class="o">:</span></div><div class='line' id='LC985'>							<span class="c1">//Trigger the event</span></div><div class='line' id='LC986'>					        <span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipeUp&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">]);</span></div><div class='line' id='LC987'><br/></div><div class='line' id='LC988'>					        <span class="c1">//Fire the callback</span></div><div class='line' id='LC989'>							<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeUp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC990'>								<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeUp</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">);</span></div><div class='line' id='LC991'>							<span class="p">}</span></div><div class='line' id='LC992'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC993'><br/></div><div class='line' id='LC994'>						<span class="k">case</span> <span class="nx">DOWN</span><span class="o">:</span></div><div class='line' id='LC995'>							<span class="c1">//Trigger the event</span></div><div class='line' id='LC996'>					        <span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipeDown&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">]);</span></div><div class='line' id='LC997'><br/></div><div class='line' id='LC998'>					        <span class="c1">//Fire the callback</span></div><div class='line' id='LC999'>							<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeDown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1000'>								<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeDown</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">);</span></div><div class='line' id='LC1001'>							<span class="p">}</span></div><div class='line' id='LC1002'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1003'>					<span class="p">}</span></div><div class='line' id='LC1004'>				<span class="p">}</span></div><div class='line' id='LC1005'>			<span class="p">}</span></div><div class='line' id='LC1006'><br/></div><div class='line' id='LC1007'><br/></div><div class='line' id='LC1008'>			<span class="c1">//PINCHES....</span></div><div class='line' id='LC1009'>			<span class="k">if</span><span class="p">(</span><span class="nx">gesture</span><span class="o">==</span><span class="nx">PINCH</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1010'>				<span class="c1">//Trigger the event</span></div><div class='line' id='LC1011'>			     <span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pinchStatus&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">phase</span><span class="p">,</span> <span class="nx">pinchDirection</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">pinchDistance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">,</span> <span class="nx">pinchZoom</span><span class="p">]);</span></div><div class='line' id='LC1012'><br/></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1014'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">pinchStatus</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1015'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchStatus</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">phase</span><span class="p">,</span> <span class="nx">pinchDirection</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">pinchDistance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">,</span> <span class="nx">pinchZoom</span><span class="p">);</span></div><div class='line' id='LC1016'>					<span class="c1">//If the status cancels, then dont run the subsequent event handlers..</span></div><div class='line' id='LC1017'>					<span class="k">if</span><span class="p">(</span><span class="nx">ret</span><span class="o">===</span><span class="kc">false</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1018'>				<span class="p">}</span></div><div class='line' id='LC1019'><br/></div><div class='line' id='LC1020'>				<span class="k">if</span><span class="p">(</span><span class="nx">phase</span><span class="o">==</span><span class="nx">PHASE_END</span> <span class="o">&amp;&amp;</span> <span class="nx">validatePinch</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC1021'><br/></div><div class='line' id='LC1022'>					<span class="k">switch</span> <span class="p">(</span><span class="nx">pinchDirection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1023'>						<span class="k">case</span> <span class="nx">IN</span><span class="o">:</span></div><div class='line' id='LC1024'>							<span class="c1">//Trigger the event</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pinchIn&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">pinchDirection</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">pinchDistance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">,</span> <span class="nx">pinchZoom</span><span class="p">]);</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1027'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">pinchIn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1029'>								<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchIn</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">pinchDirection</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">pinchDistance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">,</span> <span class="nx">pinchZoom</span><span class="p">);</span></div><div class='line' id='LC1030'>							<span class="p">}</span></div><div class='line' id='LC1031'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1032'><br/></div><div class='line' id='LC1033'>						<span class="k">case</span> <span class="nx">OUT</span><span class="o">:</span></div><div class='line' id='LC1034'>							<span class="c1">//Trigger the event</span></div><div class='line' id='LC1035'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;pinchOut&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">pinchDirection</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">pinchDistance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">,</span> <span class="nx">pinchZoom</span><span class="p">]);</span></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">pinchOut</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1039'>								<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchOut</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">pinchDirection</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">pinchDistance</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">duration</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">fingerCount</span><span class="p">,</span> <span class="nx">pinchZoom</span><span class="p">);</span></div><div class='line' id='LC1040'>							<span class="p">}</span></div><div class='line' id='LC1041'>							<span class="k">break</span><span class="p">;</span>	</div><div class='line' id='LC1042'>					<span class="p">}</span></div><div class='line' id='LC1043'>				<span class="p">}</span></div><div class='line' id='LC1044'>			<span class="p">}</span></div><div class='line' id='LC1045'><br/></div><div class='line' id='LC1046'><br/></div><div class='line' id='LC1047'><br/></div><div class='line' id='LC1048'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1049'><br/></div><div class='line' id='LC1050'>			<span class="k">if</span><span class="p">(</span><span class="nx">gesture</span><span class="o">==</span><span class="nx">TAP</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1051'>				<span class="k">if</span><span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_CANCEL</span> <span class="o">||</span> <span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_END</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1052'><br/></div><div class='line' id='LC1053'>&nbsp;&nbsp;&nbsp;&nbsp;			    </div><div class='line' id='LC1054'>&nbsp;&nbsp;&nbsp;&nbsp;			    <span class="c1">//Cancel any existing double tap</span></div><div class='line' id='LC1055'>				    <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">singleTapTimeout</span><span class="p">);</span></div><div class='line' id='LC1056'><br/></div><div class='line' id='LC1057'>					<span class="c1">//If we are also looking for doubelTaps, wait incase this is one...</span></div><div class='line' id='LC1058'>				    <span class="k">if</span><span class="p">(</span><span class="nx">hasDoubleTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">inDoubleTap</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC1059'>				        <span class="c1">//Cache the time of this tap</span></div><div class='line' id='LC1060'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doubleTapStartTime</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">();</span></div><div class='line' id='LC1061'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1062'>				        <span class="c1">//Now wait for the double tap timeout, and trigger this single tap</span></div><div class='line' id='LC1063'>				        <span class="c1">//if its not cancelled by a double tap</span></div><div class='line' id='LC1064'>				        <span class="nx">singleTapTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1065'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			        <span class="nx">doubleTapStartTime</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1066'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			        <span class="c1">//Trigger the event</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;tap&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">]);</span></div><div class='line' id='LC1068'><br/></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">tap</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1072'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">tap</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1074'>&nbsp;&nbsp;&nbsp;&nbsp;			        <span class="p">},</span> <span class="k">this</span><span class="p">),</span> <span class="nx">options</span><span class="p">.</span><span class="nx">doubleTapThreshold</span> <span class="p">);</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;&nbsp;&nbsp;			    	</div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;			    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1077'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doubleTapStartTime</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1079'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Trigger the event</span></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;tap&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">]);</span></div><div class='line' id='LC1081'><br/></div><div class='line' id='LC1082'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1083'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">tap</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1085'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">tap</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1087'>	    		    <span class="p">}</span></div><div class='line' id='LC1088'>	    		<span class="p">}</span></div><div class='line' id='LC1089'>			<span class="p">}</span></div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">gesture</span><span class="o">==</span><span class="nx">DOUBLE_TAP</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1092'>				<span class="k">if</span><span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_CANCEL</span> <span class="o">||</span> <span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_END</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1093'>					<span class="c1">//Cancel any pending singletap </span></div><div class='line' id='LC1094'>				    <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">singleTapTimeout</span><span class="p">);</span></div><div class='line' id='LC1095'>				    <span class="nx">doubleTapStartTime</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1096'><br/></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Trigger the event</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;doubletap&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">]);</span></div><div class='line' id='LC1099'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">doubleTap</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">doubleTap</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1104'>	    		<span class="p">}</span></div><div class='line' id='LC1105'>			<span class="p">}</span></div><div class='line' id='LC1106'><br/></div><div class='line' id='LC1107'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">gesture</span><span class="o">==</span><span class="nx">LONG_TAP</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1108'>				<span class="k">if</span><span class="p">(</span><span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_CANCEL</span> <span class="o">||</span> <span class="nx">phase</span> <span class="o">===</span> <span class="nx">PHASE_END</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1109'>					<span class="c1">//Cancel any pending singletap (shouldnt be one)</span></div><div class='line' id='LC1110'>				    <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">singleTapTimeout</span><span class="p">);</span></div><div class='line' id='LC1111'>				    <span class="nx">doubleTapStartTime</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1112'><br/></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Trigger the event</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;longtap&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">]);</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Fire the callback</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">longTap</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ret</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">longTap</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1120'>	    		<span class="p">}</span></div><div class='line' id='LC1121'>			<span class="p">}</span>				</div><div class='line' id='LC1122'><br/></div><div class='line' id='LC1123'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC1124'>		<span class="p">}</span></div><div class='line' id='LC1125'><br/></div><div class='line' id='LC1126'><br/></div><div class='line' id='LC1127'><br/></div><div class='line' id='LC1128'><br/></div><div class='line' id='LC1129'>		<span class="c1">//</span></div><div class='line' id='LC1130'>		<span class="c1">// GESTURE VALIDATION</span></div><div class='line' id='LC1131'>		<span class="c1">//</span></div><div class='line' id='LC1132'><br/></div><div class='line' id='LC1133'>		<span class="cm">/**</span></div><div class='line' id='LC1134'><span class="cm">		* Checks the user has swipe far enough</span></div><div class='line' id='LC1135'><span class="cm">		* @return Boolean if &lt;code&gt;threshold&lt;/code&gt; has been set, return true if the threshold was met, else false.</span></div><div class='line' id='LC1136'><span class="cm">		* If no threshold was set, then we return true.</span></div><div class='line' id='LC1137'><span class="cm">		* @inner</span></div><div class='line' id='LC1138'><span class="cm">		*/</span></div><div class='line' id='LC1139'>		<span class="kd">function</span> <span class="nx">validateSwipeDistance</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1140'>			<span class="kd">var</span> <span class="nx">valid</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1141'>			<span class="c1">//If we made it past the min swipe distance..</span></div><div class='line' id='LC1142'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">threshold</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1143'>				<span class="nx">valid</span> <span class="o">=</span> <span class="nx">distance</span> <span class="o">&gt;=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">threshold</span><span class="p">;</span></div><div class='line' id='LC1144'>			<span class="p">}</span></div><div class='line' id='LC1145'><br/></div><div class='line' id='LC1146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">valid</span><span class="p">;</span></div><div class='line' id='LC1147'>		<span class="p">}</span></div><div class='line' id='LC1148'><br/></div><div class='line' id='LC1149'>		<span class="cm">/**</span></div><div class='line' id='LC1150'><span class="cm">		* Checks the user has swiped back to cancel.</span></div><div class='line' id='LC1151'><span class="cm">		* @return Boolean if &lt;code&gt;cancelThreshold&lt;/code&gt; has been set, return true if the cancelThreshold was met, else false.</span></div><div class='line' id='LC1152'><span class="cm">		* If no cancelThreshold was set, then we return true.</span></div><div class='line' id='LC1153'><span class="cm">		* @inner</span></div><div class='line' id='LC1154'><span class="cm">		*/</span></div><div class='line' id='LC1155'>		<span class="kd">function</span> <span class="nx">didSwipeBackToCancel</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cancelled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1157'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">cancelThreshold</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">direction</span> <span class="o">!==</span><span class="kc">null</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC1158'>&nbsp;&nbsp;&nbsp;&nbsp;		    <span class="nx">cancelled</span> <span class="o">=</span>  <span class="p">(</span><span class="nx">getMaxDistance</span><span class="p">(</span> <span class="nx">direction</span> <span class="p">)</span> <span class="o">-</span> <span class="nx">distance</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">cancelThreshold</span><span class="p">;</span></div><div class='line' id='LC1159'>			<span class="p">}</span></div><div class='line' id='LC1160'><br/></div><div class='line' id='LC1161'>			<span class="k">return</span> <span class="nx">cancelled</span><span class="p">;</span></div><div class='line' id='LC1162'>		<span class="p">}</span></div><div class='line' id='LC1163'><br/></div><div class='line' id='LC1164'>		<span class="cm">/**</span></div><div class='line' id='LC1165'><span class="cm">		* Checks the user has pinched far enough</span></div><div class='line' id='LC1166'><span class="cm">		* @return Boolean if &lt;code&gt;pinchThreshold&lt;/code&gt; has been set, return true if the threshold was met, else false.</span></div><div class='line' id='LC1167'><span class="cm">		* If no threshold was set, then we return true.</span></div><div class='line' id='LC1168'><span class="cm">		* @inner</span></div><div class='line' id='LC1169'><span class="cm">		*/</span></div><div class='line' id='LC1170'>		<span class="kd">function</span> <span class="nx">validatePinchDistance</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1171'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">pinchThreshold</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1172'>				<span class="k">return</span> <span class="nx">pinchDistance</span> <span class="o">&gt;=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchThreshold</span><span class="p">;</span></div><div class='line' id='LC1173'>			<span class="p">}</span></div><div class='line' id='LC1174'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1175'>		<span class="p">}</span></div><div class='line' id='LC1176'><br/></div><div class='line' id='LC1177'>		<span class="cm">/**</span></div><div class='line' id='LC1178'><span class="cm">		* Checks that the time taken to swipe meets the minimum / maximum requirements</span></div><div class='line' id='LC1179'><span class="cm">		* @return Boolean</span></div><div class='line' id='LC1180'><span class="cm">		* @inner</span></div><div class='line' id='LC1181'><span class="cm">		*/</span></div><div class='line' id='LC1182'>		<span class="kd">function</span> <span class="nx">validateSwipeTime</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1183'>			<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1184'>			<span class="c1">//If no time set, then return true</span></div><div class='line' id='LC1185'><br/></div><div class='line' id='LC1186'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">maxTimeThreshold</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1187'>				<span class="k">if</span> <span class="p">(</span><span class="nx">duration</span> <span class="o">&gt;=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">maxTimeThreshold</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1188'>					<span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1189'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1190'>					<span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1191'>				<span class="p">}</span></div><div class='line' id='LC1192'>			<span class="p">}</span></div><div class='line' id='LC1193'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1194'>				<span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1195'>			<span class="p">}</span></div><div class='line' id='LC1196'><br/></div><div class='line' id='LC1197'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1198'>		<span class="p">}</span></div><div class='line' id='LC1199'><br/></div><div class='line' id='LC1200'><br/></div><div class='line' id='LC1201'>		<span class="cm">/**</span></div><div class='line' id='LC1202'><span class="cm">		* Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.</span></div><div class='line' id='LC1203'><span class="cm">		* This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.</span></div><div class='line' id='LC1204'><span class="cm">		* @param {object} jqEvent The normalised jQuery representation of the event object.</span></div><div class='line' id='LC1205'><span class="cm">		* @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1206'><span class="cm">		* @see $.fn.swipe.directions</span></div><div class='line' id='LC1207'><span class="cm">		* @inner</span></div><div class='line' id='LC1208'><span class="cm">		*/</span></div><div class='line' id='LC1209'>		<span class="kd">function</span> <span class="nx">validateDefaultEvent</span><span class="p">(</span><span class="nx">jqEvent</span><span class="p">,</span> <span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1210'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">===</span> <span class="nx">NONE</span> <span class="o">||</span> <span class="nx">hasPinches</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC1211'>				<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1212'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1213'>				<span class="kd">var</span> <span class="nx">auto</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">===</span> <span class="nx">AUTO</span><span class="p">;</span></div><div class='line' id='LC1214'><br/></div><div class='line' id='LC1215'>				<span class="k">switch</span> <span class="p">(</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1216'>					<span class="k">case</span> <span class="nx">LEFT</span><span class="o">:</span></div><div class='line' id='LC1217'>						<span class="k">if</span> <span class="p">((</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeLeft</span> <span class="o">&amp;&amp;</span> <span class="nx">auto</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">auto</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">!=</span> <span class="nx">HORIZONTAL</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1218'>							<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1219'>						<span class="p">}</span></div><div class='line' id='LC1220'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1221'><br/></div><div class='line' id='LC1222'>					<span class="k">case</span> <span class="nx">RIGHT</span><span class="o">:</span></div><div class='line' id='LC1223'>						<span class="k">if</span> <span class="p">((</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeRight</span> <span class="o">&amp;&amp;</span> <span class="nx">auto</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">auto</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">!=</span> <span class="nx">HORIZONTAL</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1224'>							<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1225'>						<span class="p">}</span></div><div class='line' id='LC1226'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1227'><br/></div><div class='line' id='LC1228'>					<span class="k">case</span> <span class="nx">UP</span><span class="o">:</span></div><div class='line' id='LC1229'>						<span class="k">if</span> <span class="p">((</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeUp</span> <span class="o">&amp;&amp;</span> <span class="nx">auto</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">auto</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">!=</span> <span class="nx">VERTICAL</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1230'>							<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1231'>						<span class="p">}</span></div><div class='line' id='LC1232'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1233'><br/></div><div class='line' id='LC1234'>					<span class="k">case</span> <span class="nx">DOWN</span><span class="o">:</span></div><div class='line' id='LC1235'>						<span class="k">if</span> <span class="p">((</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipeDown</span> <span class="o">&amp;&amp;</span> <span class="nx">auto</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">auto</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">allowPageScroll</span> <span class="o">!=</span> <span class="nx">VERTICAL</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1236'>							<span class="nx">jqEvent</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1237'>						<span class="p">}</span></div><div class='line' id='LC1238'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1239'>				<span class="p">}</span></div><div class='line' id='LC1240'>			<span class="p">}</span></div><div class='line' id='LC1241'><br/></div><div class='line' id='LC1242'>		<span class="p">}</span></div><div class='line' id='LC1243'><br/></div><div class='line' id='LC1244'><br/></div><div class='line' id='LC1245'>		<span class="c1">// PINCHES</span></div><div class='line' id='LC1246'>		<span class="cm">/**</span></div><div class='line' id='LC1247'><span class="cm">		 * Returns true of the current pinch meets the thresholds</span></div><div class='line' id='LC1248'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1249'><span class="cm">		 * @inner</span></div><div class='line' id='LC1250'><span class="cm">		*/</span></div><div class='line' id='LC1251'>		<span class="kd">function</span> <span class="nx">validatePinch</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1252'>		    <span class="kd">var</span> <span class="nx">hasCorrectFingerCount</span> <span class="o">=</span> <span class="nx">validateFingers</span><span class="p">();</span></div><div class='line' id='LC1253'>		    <span class="kd">var</span> <span class="nx">hasEndPoint</span> <span class="o">=</span> <span class="nx">validateEndPoint</span><span class="p">();</span></div><div class='line' id='LC1254'>			<span class="kd">var</span> <span class="nx">hasCorrectDistance</span> <span class="o">=</span> <span class="nx">validatePinchDistance</span><span class="p">();</span></div><div class='line' id='LC1255'>			<span class="k">return</span> <span class="nx">hasCorrectFingerCount</span> <span class="o">&amp;&amp;</span> <span class="nx">hasEndPoint</span> <span class="o">&amp;&amp;</span> <span class="nx">hasCorrectDistance</span><span class="p">;</span></div><div class='line' id='LC1256'><br/></div><div class='line' id='LC1257'>		<span class="p">}</span></div><div class='line' id='LC1258'><br/></div><div class='line' id='LC1259'>		<span class="cm">/**</span></div><div class='line' id='LC1260'><span class="cm">		 * Returns true if any Pinch events have been registered</span></div><div class='line' id='LC1261'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1262'><span class="cm">		 * @inner</span></div><div class='line' id='LC1263'><span class="cm">		*/</span></div><div class='line' id='LC1264'>		<span class="kd">function</span> <span class="nx">hasPinches</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1265'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1266'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">pinchStatus</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchIn</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pinchOut</span><span class="p">);</span></div><div class='line' id='LC1267'>		<span class="p">}</span></div><div class='line' id='LC1268'><br/></div><div class='line' id='LC1269'>		<span class="cm">/**</span></div><div class='line' id='LC1270'><span class="cm">		 * Returns true if we are detecting pinches, and have one</span></div><div class='line' id='LC1271'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1272'><span class="cm">		 * @inner</span></div><div class='line' id='LC1273'><span class="cm">		 */</span></div><div class='line' id='LC1274'>		<span class="kd">function</span> <span class="nx">didPinch</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1275'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1276'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">validatePinch</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">hasPinches</span><span class="p">());</span></div><div class='line' id='LC1277'>		<span class="p">}</span></div><div class='line' id='LC1278'><br/></div><div class='line' id='LC1279'><br/></div><div class='line' id='LC1280'><br/></div><div class='line' id='LC1281'><br/></div><div class='line' id='LC1282'>		<span class="c1">// SWIPES</span></div><div class='line' id='LC1283'>		<span class="cm">/**</span></div><div class='line' id='LC1284'><span class="cm">		 * Returns true if the current swipe meets the thresholds</span></div><div class='line' id='LC1285'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1286'><span class="cm">		 * @inner</span></div><div class='line' id='LC1287'><span class="cm">		*/</span></div><div class='line' id='LC1288'>		<span class="kd">function</span> <span class="nx">validateSwipe</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1289'>			<span class="c1">//Check validity of swipe</span></div><div class='line' id='LC1290'>			<span class="kd">var</span> <span class="nx">hasValidTime</span> <span class="o">=</span> <span class="nx">validateSwipeTime</span><span class="p">();</span></div><div class='line' id='LC1291'>			<span class="kd">var</span> <span class="nx">hasValidDistance</span> <span class="o">=</span> <span class="nx">validateSwipeDistance</span><span class="p">();</span>	</div><div class='line' id='LC1292'>			<span class="kd">var</span> <span class="nx">hasCorrectFingerCount</span> <span class="o">=</span> <span class="nx">validateFingers</span><span class="p">();</span></div><div class='line' id='LC1293'>		    <span class="kd">var</span> <span class="nx">hasEndPoint</span> <span class="o">=</span> <span class="nx">validateEndPoint</span><span class="p">();</span></div><div class='line' id='LC1294'>		    <span class="kd">var</span> <span class="nx">didCancel</span> <span class="o">=</span> <span class="nx">didSwipeBackToCancel</span><span class="p">();</span>	</div><div class='line' id='LC1295'><br/></div><div class='line' id='LC1296'>			<span class="c1">// if the user swiped more than the minimum length, perform the appropriate action</span></div><div class='line' id='LC1297'>			<span class="c1">// hasValidDistance is null when no distance is set </span></div><div class='line' id='LC1298'>			<span class="kd">var</span> <span class="nx">valid</span> <span class="o">=</span>  <span class="o">!</span><span class="nx">didCancel</span> <span class="o">&amp;&amp;</span> <span class="nx">hasEndPoint</span> <span class="o">&amp;&amp;</span> <span class="nx">hasCorrectFingerCount</span> <span class="o">&amp;&amp;</span> <span class="nx">hasValidDistance</span> <span class="o">&amp;&amp;</span> <span class="nx">hasValidTime</span><span class="p">;</span></div><div class='line' id='LC1299'><br/></div><div class='line' id='LC1300'>			<span class="k">return</span> <span class="nx">valid</span><span class="p">;</span></div><div class='line' id='LC1301'>		<span class="p">}</span></div><div class='line' id='LC1302'><br/></div><div class='line' id='LC1303'>		<span class="cm">/**</span></div><div class='line' id='LC1304'><span class="cm">		 * Returns true if any Swipe events have been registered</span></div><div class='line' id='LC1305'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1306'><span class="cm">		 * @inner</span></div><div class='line' id='LC1307'><span class="cm">		*/</span></div><div class='line' id='LC1308'>		<span class="kd">function</span> <span class="nx">hasSwipes</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1309'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1310'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">swipe</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeStatus</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeLeft</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeRight</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeUp</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">swipeDown</span><span class="p">);</span></div><div class='line' id='LC1311'>		<span class="p">}</span></div><div class='line' id='LC1312'><br/></div><div class='line' id='LC1313'><br/></div><div class='line' id='LC1314'>		<span class="cm">/**</span></div><div class='line' id='LC1315'><span class="cm">		 * Returns true if we are detecting swipes and have one</span></div><div class='line' id='LC1316'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1317'><span class="cm">		 * @inner</span></div><div class='line' id='LC1318'><span class="cm">		*/</span></div><div class='line' id='LC1319'>		<span class="kd">function</span> <span class="nx">didSwipe</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1320'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1321'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">validateSwipe</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">hasSwipes</span><span class="p">());</span></div><div class='line' id='LC1322'>		<span class="p">}</span></div><div class='line' id='LC1323'><br/></div><div class='line' id='LC1324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1325'><span class="cm">		 * Returns true if we have matched the number of fingers we are looking for</span></div><div class='line' id='LC1326'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1327'><span class="cm">		 * @inner</span></div><div class='line' id='LC1328'><span class="cm">		*/</span></div><div class='line' id='LC1329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">validateFingers</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//The number of fingers we want were matched, or on desktop we ignore</span></div><div class='line' id='LC1331'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">return</span> <span class="p">((</span><span class="nx">fingerCount</span> <span class="o">===</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fingers</span> <span class="o">===</span> <span class="nx">ALL_FINGERS</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="nx">SUPPORTS_TOUCH</span><span class="p">);</span></div><div class='line' id='LC1332'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="p">}</span></div><div class='line' id='LC1333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1335'><span class="cm">		 * Returns true if we have an end point for the swipe</span></div><div class='line' id='LC1336'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1337'><span class="cm">		 * @inner</span></div><div class='line' id='LC1338'><span class="cm">		*/</span></div><div class='line' id='LC1339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">validateEndPoint</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//We have an end value for the finger</span></div><div class='line' id='LC1341'>		    <span class="k">return</span> <span class="nx">fingerData</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">end</span><span class="p">.</span><span class="nx">x</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1343'><br/></div><div class='line' id='LC1344'>		<span class="c1">// TAP / CLICK</span></div><div class='line' id='LC1345'>		<span class="cm">/**</span></div><div class='line' id='LC1346'><span class="cm">		 * Returns true if a click / tap events have been registered</span></div><div class='line' id='LC1347'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1348'><span class="cm">		 * @inner</span></div><div class='line' id='LC1349'><span class="cm">		*/</span></div><div class='line' id='LC1350'>		<span class="kd">function</span> <span class="nx">hasTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1351'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1352'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">tap</span><span class="p">)</span> <span class="p">;</span></div><div class='line' id='LC1353'>		<span class="p">}</span></div><div class='line' id='LC1354'><br/></div><div class='line' id='LC1355'>		<span class="cm">/**</span></div><div class='line' id='LC1356'><span class="cm">		 * Returns true if a double tap events have been registered</span></div><div class='line' id='LC1357'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1358'><span class="cm">		 * @inner</span></div><div class='line' id='LC1359'><span class="cm">		*/</span></div><div class='line' id='LC1360'>		<span class="kd">function</span> <span class="nx">hasDoubleTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1361'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1362'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">doubleTap</span><span class="p">)</span> <span class="p">;</span></div><div class='line' id='LC1363'>		<span class="p">}</span></div><div class='line' id='LC1364'><br/></div><div class='line' id='LC1365'>		<span class="cm">/**</span></div><div class='line' id='LC1366'><span class="cm">		 * Returns true if any long tap events have been registered</span></div><div class='line' id='LC1367'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1368'><span class="cm">		 * @inner</span></div><div class='line' id='LC1369'><span class="cm">		*/</span></div><div class='line' id='LC1370'>		<span class="kd">function</span> <span class="nx">hasLongTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1371'>			<span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1372'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">longTap</span><span class="p">)</span> <span class="p">;</span></div><div class='line' id='LC1373'>		<span class="p">}</span></div><div class='line' id='LC1374'><br/></div><div class='line' id='LC1375'>		<span class="cm">/**</span></div><div class='line' id='LC1376'><span class="cm">		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn&#39;t past.</span></div><div class='line' id='LC1377'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1378'><span class="cm">		 * @inner</span></div><div class='line' id='LC1379'><span class="cm">		*/</span></div><div class='line' id='LC1380'>		<span class="kd">function</span> <span class="nx">validateDoubleTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1381'>		    <span class="k">if</span><span class="p">(</span><span class="nx">doubleTapStartTime</span><span class="o">==</span><span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC1382'>		        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1383'>		    <span class="p">}</span></div><div class='line' id='LC1384'>		    <span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">();</span></div><div class='line' id='LC1385'>		    <span class="k">return</span> <span class="p">(</span><span class="nx">hasDoubleTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="p">((</span><span class="nx">now</span><span class="o">-</span><span class="nx">doubleTapStartTime</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">doubleTapThreshold</span><span class="p">));</span></div><div class='line' id='LC1386'>		<span class="p">}</span></div><div class='line' id='LC1387'><br/></div><div class='line' id='LC1388'>		<span class="cm">/**</span></div><div class='line' id='LC1389'><span class="cm">		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn&#39;t past.</span></div><div class='line' id='LC1390'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1391'><span class="cm">		 * @inner</span></div><div class='line' id='LC1392'><span class="cm">		*/</span></div><div class='line' id='LC1393'>		<span class="kd">function</span> <span class="nx">inDoubleTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1394'>		    <span class="k">return</span> <span class="nx">validateDoubleTap</span><span class="p">();</span></div><div class='line' id='LC1395'>		<span class="p">}</span></div><div class='line' id='LC1396'><br/></div><div class='line' id='LC1397'><br/></div><div class='line' id='LC1398'>		<span class="cm">/**</span></div><div class='line' id='LC1399'><span class="cm">		 * Returns true if we have a valid tap</span></div><div class='line' id='LC1400'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1401'><span class="cm">		 * @inner</span></div><div class='line' id='LC1402'><span class="cm">		*/</span></div><div class='line' id='LC1403'>		<span class="kd">function</span> <span class="nx">validateTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1404'>		    <span class="k">return</span> <span class="p">((</span><span class="nx">fingerCount</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="o">!</span><span class="nx">SUPPORTS_TOUCH</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">distance</span><span class="p">)</span> <span class="o">||</span> <span class="nx">distance</span> <span class="o">===</span> <span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC1405'>		<span class="p">}</span></div><div class='line' id='LC1406'><br/></div><div class='line' id='LC1407'>		<span class="cm">/**</span></div><div class='line' id='LC1408'><span class="cm">		 * Returns true if we have a valid long tap</span></div><div class='line' id='LC1409'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1410'><span class="cm">		 * @inner</span></div><div class='line' id='LC1411'><span class="cm">		*/</span></div><div class='line' id='LC1412'>		<span class="kd">function</span> <span class="nx">validateLongTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1413'>		    <span class="c1">//slight threshold on moving finger</span></div><div class='line' id='LC1414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">((</span><span class="nx">duration</span> <span class="o">&gt;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">longTapThreshold</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">distance</span> <span class="o">&lt;</span> <span class="nx">DOUBLE_TAP_THRESHOLD</span><span class="p">));</span> </div><div class='line' id='LC1415'>		<span class="p">}</span></div><div class='line' id='LC1416'><br/></div><div class='line' id='LC1417'>		<span class="cm">/**</span></div><div class='line' id='LC1418'><span class="cm">		 * Returns true if we are detecting taps and have one</span></div><div class='line' id='LC1419'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1420'><span class="cm">		 * @inner</span></div><div class='line' id='LC1421'><span class="cm">		*/</span></div><div class='line' id='LC1422'>		<span class="kd">function</span> <span class="nx">didTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1423'>		    <span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1424'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">validateTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">hasTap</span><span class="p">());</span></div><div class='line' id='LC1425'>		<span class="p">}</span></div><div class='line' id='LC1426'><br/></div><div class='line' id='LC1427'><br/></div><div class='line' id='LC1428'>		<span class="cm">/**</span></div><div class='line' id='LC1429'><span class="cm">		 * Returns true if we are detecting double taps and have one</span></div><div class='line' id='LC1430'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1431'><span class="cm">		 * @inner</span></div><div class='line' id='LC1432'><span class="cm">		*/</span></div><div class='line' id='LC1433'>		<span class="kd">function</span> <span class="nx">didDoubleTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1434'>		    <span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1435'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">validateDoubleTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">hasDoubleTap</span><span class="p">());</span></div><div class='line' id='LC1436'>		<span class="p">}</span></div><div class='line' id='LC1437'><br/></div><div class='line' id='LC1438'>		<span class="cm">/**</span></div><div class='line' id='LC1439'><span class="cm">		 * Returns true if we are detecting long taps and have one</span></div><div class='line' id='LC1440'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1441'><span class="cm">		 * @inner</span></div><div class='line' id='LC1442'><span class="cm">		*/</span></div><div class='line' id='LC1443'>		<span class="kd">function</span> <span class="nx">didLongTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1444'>		    <span class="c1">//Enure we dont return 0 or null for false values</span></div><div class='line' id='LC1445'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">validateLongTap</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">hasLongTap</span><span class="p">());</span></div><div class='line' id='LC1446'>		<span class="p">}</span></div><div class='line' id='LC1447'><br/></div><div class='line' id='LC1448'><br/></div><div class='line' id='LC1449'><br/></div><div class='line' id='LC1450'><br/></div><div class='line' id='LC1451'>		<span class="c1">// MULTI FINGER TOUCH</span></div><div class='line' id='LC1452'>		<span class="cm">/**</span></div><div class='line' id='LC1453'><span class="cm">		 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up</span></div><div class='line' id='LC1454'><span class="cm">		 * @inner</span></div><div class='line' id='LC1455'><span class="cm">		*/</span></div><div class='line' id='LC1456'>		<span class="kd">function</span> <span class="nx">startMultiFingerRelease</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1457'>			<span class="nx">previousTouchEndTime</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">();</span></div><div class='line' id='LC1458'>			<span class="nx">previousTouchFingerCount</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span><span class="o">+</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1459'>		<span class="p">}</span></div><div class='line' id='LC1460'><br/></div><div class='line' id='LC1461'>		<span class="cm">/**</span></div><div class='line' id='LC1462'><span class="cm">		 * Cancels the tracking of time between 2 finger releases, and resets counters</span></div><div class='line' id='LC1463'><span class="cm">		 * @inner</span></div><div class='line' id='LC1464'><span class="cm">		*/</span></div><div class='line' id='LC1465'>		<span class="kd">function</span> <span class="nx">cancelMultiFingerRelease</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1466'>			<span class="nx">previousTouchEndTime</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1467'>			<span class="nx">previousTouchFingerCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1468'>		<span class="p">}</span></div><div class='line' id='LC1469'><br/></div><div class='line' id='LC1470'>		<span class="cm">/**</span></div><div class='line' id='LC1471'><span class="cm">		 * Checks if we are in the threshold between 2 fingers being released </span></div><div class='line' id='LC1472'><span class="cm">		 * @return Boolean</span></div><div class='line' id='LC1473'><span class="cm">		 * @inner</span></div><div class='line' id='LC1474'><span class="cm">		*/</span></div><div class='line' id='LC1475'>		<span class="kd">function</span> <span class="nx">inMultiFingerRelease</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1476'><br/></div><div class='line' id='LC1477'>			<span class="kd">var</span> <span class="nx">withinThreshold</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1478'><br/></div><div class='line' id='LC1479'>			<span class="k">if</span><span class="p">(</span><span class="nx">previousTouchEndTime</span><span class="p">)</span> <span class="p">{</span>	</div><div class='line' id='LC1480'>				<span class="kd">var</span> <span class="nx">diff</span> <span class="o">=</span> <span class="nx">getTimeStamp</span><span class="p">()</span> <span class="o">-</span> <span class="nx">previousTouchEndTime</span>	</div><div class='line' id='LC1481'>				<span class="k">if</span><span class="p">(</span> <span class="nx">diff</span><span class="o">&lt;=</span><span class="nx">options</span><span class="p">.</span><span class="nx">fingerReleaseThreshold</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1482'>					<span class="nx">withinThreshold</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1483'>				<span class="p">}</span></div><div class='line' id='LC1484'>			<span class="p">}</span></div><div class='line' id='LC1485'><br/></div><div class='line' id='LC1486'>			<span class="k">return</span> <span class="nx">withinThreshold</span><span class="p">;</span>	</div><div class='line' id='LC1487'>		<span class="p">}</span></div><div class='line' id='LC1488'><br/></div><div class='line' id='LC1489'><br/></div><div class='line' id='LC1490'>		<span class="cm">/**</span></div><div class='line' id='LC1491'><span class="cm">		* gets a data flag to indicate that a touch is in progress</span></div><div class='line' id='LC1492'><span class="cm">		* @return Boolean</span></div><div class='line' id='LC1493'><span class="cm">		* @inner</span></div><div class='line' id='LC1494'><span class="cm">		*/</span></div><div class='line' id='LC1495'>		<span class="kd">function</span> <span class="nx">getTouchInProgress</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1496'>			<span class="c1">//strict equality to ensure only true and false are returned</span></div><div class='line' id='LC1497'>			<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">$element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">PLUGIN_NS</span><span class="o">+</span><span class="s1">&#39;_intouch&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1498'>		<span class="p">}</span></div><div class='line' id='LC1499'><br/></div><div class='line' id='LC1500'>		<span class="cm">/**</span></div><div class='line' id='LC1501'><span class="cm">		* Sets a data flag to indicate that a touch is in progress</span></div><div class='line' id='LC1502'><span class="cm">		* @param {boolean} val The value to set the property to</span></div><div class='line' id='LC1503'><span class="cm">		* @inner</span></div><div class='line' id='LC1504'><span class="cm">		*/</span></div><div class='line' id='LC1505'>		<span class="kd">function</span> <span class="nx">setTouchInProgress</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1506'><br/></div><div class='line' id='LC1507'>			<span class="c1">//Add or remove event listeners depending on touch status</span></div><div class='line' id='LC1508'>			<span class="k">if</span><span class="p">(</span><span class="nx">val</span><span class="o">===</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1509'>				<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">MOVE_EV</span><span class="p">,</span> <span class="nx">touchMove</span><span class="p">);</span></div><div class='line' id='LC1510'>				<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">END_EV</span><span class="p">,</span> <span class="nx">touchEnd</span><span class="p">);</span></div><div class='line' id='LC1511'><br/></div><div class='line' id='LC1512'>				<span class="c1">//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit</span></div><div class='line' id='LC1513'>				<span class="k">if</span><span class="p">(</span><span class="nx">LEAVE_EV</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC1514'>					<span class="nx">$element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">LEAVE_EV</span><span class="p">,</span> <span class="nx">touchLeave</span><span class="p">);</span></div><div class='line' id='LC1515'>				<span class="p">}</span></div><div class='line' id='LC1516'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1517'>				<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">MOVE_EV</span><span class="p">,</span> <span class="nx">touchMove</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1518'>				<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">END_EV</span><span class="p">,</span> <span class="nx">touchEnd</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1519'><br/></div><div class='line' id='LC1520'>				<span class="c1">//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit</span></div><div class='line' id='LC1521'>				<span class="k">if</span><span class="p">(</span><span class="nx">LEAVE_EV</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC1522'>					<span class="nx">$element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">LEAVE_EV</span><span class="p">,</span> <span class="nx">touchLeave</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1523'>				<span class="p">}</span></div><div class='line' id='LC1524'>			<span class="p">}</span></div><div class='line' id='LC1525'><br/></div><div class='line' id='LC1526'><br/></div><div class='line' id='LC1527'>			<span class="c1">//strict equality to ensure only true and false can update the value</span></div><div class='line' id='LC1528'>			<span class="nx">$element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">PLUGIN_NS</span><span class="o">+</span><span class="s1">&#39;_intouch&#39;</span><span class="p">,</span> <span class="nx">val</span> <span class="o">===</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1529'>		<span class="p">}</span></div><div class='line' id='LC1530'><br/></div><div class='line' id='LC1531'><br/></div><div class='line' id='LC1532'>		<span class="cm">/**</span></div><div class='line' id='LC1533'><span class="cm">		 * Creates the finger data for the touch/finger in the event object.</span></div><div class='line' id='LC1534'><span class="cm">		 * @param {int} index The index in the array to store the finger data (usually the order the fingers were pressed)</span></div><div class='line' id='LC1535'><span class="cm">		 * @param {object} evt The event object containing finger data</span></div><div class='line' id='LC1536'><span class="cm">		 * @return finger data object</span></div><div class='line' id='LC1537'><span class="cm">		 * @inner</span></div><div class='line' id='LC1538'><span class="cm">		*/</span></div><div class='line' id='LC1539'>		<span class="kd">function</span> <span class="nx">createFingerData</span><span class="p">(</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">evt</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1540'>			<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">identifier</span><span class="o">!==</span><span class="kc">undefined</span> <span class="o">?</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">identifier</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span> </div><div class='line' id='LC1541'><br/></div><div class='line' id='LC1542'>			<span class="nx">fingerData</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">identifier</span> <span class="o">=</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1543'>			<span class="nx">fingerData</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">start</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">fingerData</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">end</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">pageX</span><span class="o">||</span><span class="nx">evt</span><span class="p">.</span><span class="nx">clientX</span><span class="p">;</span></div><div class='line' id='LC1544'>			<span class="nx">fingerData</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">start</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">fingerData</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">end</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">pageY</span><span class="o">||</span><span class="nx">evt</span><span class="p">.</span><span class="nx">clientY</span><span class="p">;</span></div><div class='line' id='LC1545'><br/></div><div class='line' id='LC1546'>			<span class="k">return</span> <span class="nx">fingerData</span><span class="p">[</span><span class="nx">index</span><span class="p">];</span></div><div class='line' id='LC1547'>		<span class="p">}</span></div><div class='line' id='LC1548'><br/></div><div class='line' id='LC1549'>		<span class="cm">/**</span></div><div class='line' id='LC1550'><span class="cm">		 * Updates the finger data for a particular event object</span></div><div class='line' id='LC1551'><span class="cm">		 * @param {object} evt The event object containing the touch/finger data to upadte</span></div><div class='line' id='LC1552'><span class="cm">		 * @return a finger data object.</span></div><div class='line' id='LC1553'><span class="cm">		 * @inner</span></div><div class='line' id='LC1554'><span class="cm">		*/</span></div><div class='line' id='LC1555'>		<span class="kd">function</span> <span class="nx">updateFingerData</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1556'><br/></div><div class='line' id='LC1557'>			<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">identifier</span><span class="o">!==</span><span class="kc">undefined</span> <span class="o">?</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">identifier</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span> </div><div class='line' id='LC1558'>			<span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">getFingerData</span><span class="p">(</span> <span class="nx">id</span> <span class="p">);</span></div><div class='line' id='LC1559'><br/></div><div class='line' id='LC1560'>			<span class="nx">f</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">pageX</span><span class="o">||</span><span class="nx">evt</span><span class="p">.</span><span class="nx">clientX</span><span class="p">;</span></div><div class='line' id='LC1561'>			<span class="nx">f</span><span class="p">.</span><span class="nx">end</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">pageY</span><span class="o">||</span><span class="nx">evt</span><span class="p">.</span><span class="nx">clientY</span><span class="p">;</span></div><div class='line' id='LC1562'><br/></div><div class='line' id='LC1563'>			<span class="k">return</span> <span class="nx">f</span><span class="p">;</span></div><div class='line' id='LC1564'>		<span class="p">}</span></div><div class='line' id='LC1565'><br/></div><div class='line' id='LC1566'>		<span class="cm">/**</span></div><div class='line' id='LC1567'><span class="cm">		 * Returns a finger data object by its event ID.</span></div><div class='line' id='LC1568'><span class="cm">		 * Each touch event has an identifier property, which is used </span></div><div class='line' id='LC1569'><span class="cm">		 * to track repeat touches</span></div><div class='line' id='LC1570'><span class="cm">		 * @param {int} id The unique id of the finger in the sequence of touch events.</span></div><div class='line' id='LC1571'><span class="cm">		 * @return a finger data object.</span></div><div class='line' id='LC1572'><span class="cm">		 * @inner</span></div><div class='line' id='LC1573'><span class="cm">		*/</span></div><div class='line' id='LC1574'>		<span class="kd">function</span> <span class="nx">getFingerData</span><span class="p">(</span> <span class="nx">id</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1575'>			<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">fingerData</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1576'>				<span class="k">if</span><span class="p">(</span><span class="nx">fingerData</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">identifier</span> <span class="o">==</span> <span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1577'>					<span class="k">return</span> <span class="nx">fingerData</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>	</div><div class='line' id='LC1578'>				<span class="p">}</span></div><div class='line' id='LC1579'>			<span class="p">}</span></div><div class='line' id='LC1580'>		<span class="p">}</span></div><div class='line' id='LC1581'><br/></div><div class='line' id='LC1582'>		<span class="cm">/**</span></div><div class='line' id='LC1583'><span class="cm">		 * Creats all the finger onjects and returns an array of finger data</span></div><div class='line' id='LC1584'><span class="cm">		 * @return Array of finger objects</span></div><div class='line' id='LC1585'><span class="cm">		 * @inner</span></div><div class='line' id='LC1586'><span class="cm">		*/</span></div><div class='line' id='LC1587'>		<span class="kd">function</span> <span class="nx">createAllFingerData</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1588'>			<span class="kd">var</span> <span class="nx">fingerData</span><span class="o">=</span><span class="p">[];</span></div><div class='line' id='LC1589'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;=</span><span class="mi">5</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1590'>				<span class="nx">fingerData</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC1591'>					<span class="nx">start</span><span class="o">:</span><span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">0</span> <span class="p">},</span></div><div class='line' id='LC1592'>					<span class="nx">end</span><span class="o">:</span><span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">0</span> <span class="p">},</span></div><div class='line' id='LC1593'>					<span class="nx">identifier</span><span class="o">:</span><span class="mi">0</span></div><div class='line' id='LC1594'>				<span class="p">});</span></div><div class='line' id='LC1595'>			<span class="p">}</span></div><div class='line' id='LC1596'><br/></div><div class='line' id='LC1597'>			<span class="k">return</span> <span class="nx">fingerData</span><span class="p">;</span></div><div class='line' id='LC1598'>		<span class="p">}</span></div><div class='line' id='LC1599'><br/></div><div class='line' id='LC1600'>		<span class="cm">/**</span></div><div class='line' id='LC1601'><span class="cm">		 * Sets the maximum distance swiped in the given direction. </span></div><div class='line' id='LC1602'><span class="cm">		 * If the new value is lower than the current value, the max value is not changed.</span></div><div class='line' id='LC1603'><span class="cm">		 * @param {string}  direction The direction of the swipe</span></div><div class='line' id='LC1604'><span class="cm">		 * @param {int}  distance The distance of the swipe</span></div><div class='line' id='LC1605'><span class="cm">		 * @inner</span></div><div class='line' id='LC1606'><span class="cm">		*/</span></div><div class='line' id='LC1607'>		<span class="kd">function</span> <span class="nx">setMaxDistance</span><span class="p">(</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">distance</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1608'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="nx">distance</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">distance</span><span class="p">,</span> <span class="nx">getMaxDistance</span><span class="p">(</span><span class="nx">direction</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC1609'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="nx">maximumsMap</span><span class="p">[</span><span class="nx">direction</span><span class="p">].</span><span class="nx">distance</span> <span class="o">=</span> <span class="nx">distance</span><span class="p">;</span></div><div class='line' id='LC1610'>		<span class="p">}</span></div><div class='line' id='LC1611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1613'><span class="cm">		 * gets the maximum distance swiped in the given direction. </span></div><div class='line' id='LC1614'><span class="cm">		 * @param {string}  direction The direction of the swipe</span></div><div class='line' id='LC1615'><span class="cm">		 * @return int  The distance of the swipe</span></div><div class='line' id='LC1616'><span class="cm">		 * @inner</span></div><div class='line' id='LC1617'><span class="cm">		*/</span>        </div><div class='line' id='LC1618'>		<span class="kd">function</span> <span class="nx">getMaxDistance</span><span class="p">(</span><span class="nx">direction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1619'>			<span class="k">if</span> <span class="p">(</span><span class="nx">maximumsMap</span><span class="p">[</span><span class="nx">direction</span><span class="p">])</span> <span class="k">return</span> <span class="nx">maximumsMap</span><span class="p">[</span><span class="nx">direction</span><span class="p">].</span><span class="nx">distance</span><span class="p">;</span></div><div class='line' id='LC1620'>			<span class="k">return</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC1621'>		<span class="p">}</span></div><div class='line' id='LC1622'><br/></div><div class='line' id='LC1623'>		<span class="cm">/**</span></div><div class='line' id='LC1624'><span class="cm">		 * Creats a map of directions to maximum swiped values.</span></div><div class='line' id='LC1625'><span class="cm">		 * @return Object A dictionary of maximum values, indexed by direction.</span></div><div class='line' id='LC1626'><span class="cm">		 * @inner</span></div><div class='line' id='LC1627'><span class="cm">		*/</span></div><div class='line' id='LC1628'>		<span class="kd">function</span> <span class="nx">createMaximumsData</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1629'>			<span class="kd">var</span> <span class="nx">maxData</span><span class="o">=</span><span class="p">{};</span></div><div class='line' id='LC1630'>			<span class="nx">maxData</span><span class="p">[</span><span class="nx">LEFT</span><span class="p">]</span><span class="o">=</span><span class="nx">createMaximumVO</span><span class="p">(</span><span class="nx">LEFT</span><span class="p">);</span></div><div class='line' id='LC1631'>			<span class="nx">maxData</span><span class="p">[</span><span class="nx">RIGHT</span><span class="p">]</span><span class="o">=</span><span class="nx">createMaximumVO</span><span class="p">(</span><span class="nx">RIGHT</span><span class="p">);</span></div><div class='line' id='LC1632'>			<span class="nx">maxData</span><span class="p">[</span><span class="nx">UP</span><span class="p">]</span><span class="o">=</span><span class="nx">createMaximumVO</span><span class="p">(</span><span class="nx">UP</span><span class="p">);</span></div><div class='line' id='LC1633'>			<span class="nx">maxData</span><span class="p">[</span><span class="nx">DOWN</span><span class="p">]</span><span class="o">=</span><span class="nx">createMaximumVO</span><span class="p">(</span><span class="nx">DOWN</span><span class="p">);</span></div><div class='line' id='LC1634'><br/></div><div class='line' id='LC1635'>			<span class="k">return</span> <span class="nx">maxData</span><span class="p">;</span></div><div class='line' id='LC1636'>		<span class="p">}</span></div><div class='line' id='LC1637'><br/></div><div class='line' id='LC1638'>		<span class="cm">/**</span></div><div class='line' id='LC1639'><span class="cm">		 * Creates a map maximum swiped values for a given swipe direction</span></div><div class='line' id='LC1640'><span class="cm">		 * @param {string} The direction that these values will be associated with</span></div><div class='line' id='LC1641'><span class="cm">		 * @return Object Maximum values</span></div><div class='line' id='LC1642'><span class="cm">		 * @inner</span></div><div class='line' id='LC1643'><span class="cm">		*/</span></div><div class='line' id='LC1644'>		<span class="kd">function</span> <span class="nx">createMaximumVO</span><span class="p">(</span><span class="nx">dir</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1645'>		    <span class="k">return</span> <span class="p">{</span> </div><div class='line' id='LC1646'>		        <span class="nx">direction</span><span class="o">:</span><span class="nx">dir</span><span class="p">,</span> </div><div class='line' id='LC1647'>		        <span class="nx">distance</span><span class="o">:</span><span class="mi">0</span></div><div class='line' id='LC1648'>		    <span class="p">}</span></div><div class='line' id='LC1649'>		<span class="p">}</span></div><div class='line' id='LC1650'><br/></div><div class='line' id='LC1651'><br/></div><div class='line' id='LC1652'>		<span class="c1">//</span></div><div class='line' id='LC1653'>		<span class="c1">// MATHS / UTILS</span></div><div class='line' id='LC1654'>		<span class="c1">//</span></div><div class='line' id='LC1655'><br/></div><div class='line' id='LC1656'>		<span class="cm">/**</span></div><div class='line' id='LC1657'><span class="cm">		* Calculate the duration of the swipe</span></div><div class='line' id='LC1658'><span class="cm">		* @return int</span></div><div class='line' id='LC1659'><span class="cm">		* @inner</span></div><div class='line' id='LC1660'><span class="cm">		*/</span></div><div class='line' id='LC1661'>		<span class="kd">function</span> <span class="nx">calculateDuration</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1662'>			<span class="k">return</span> <span class="nx">endTime</span> <span class="o">-</span> <span class="nx">startTime</span><span class="p">;</span></div><div class='line' id='LC1663'>		<span class="p">}</span></div><div class='line' id='LC1664'><br/></div><div class='line' id='LC1665'>		<span class="cm">/**</span></div><div class='line' id='LC1666'><span class="cm">		* Calculate the distance between 2 touches (pinch)</span></div><div class='line' id='LC1667'><span class="cm">		* @param {point} startPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1668'><span class="cm">	    * @param {point} endPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1669'><span class="cm">	    * @return int;</span></div><div class='line' id='LC1670'><span class="cm">		* @inner</span></div><div class='line' id='LC1671'><span class="cm">		*/</span></div><div class='line' id='LC1672'>		<span class="kd">function</span> <span class="nx">calculateTouchesDistance</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">,</span> <span class="nx">endPoint</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1673'>			<span class="kd">var</span> <span class="nx">diffX</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">endPoint</span><span class="p">.</span><span class="nx">x</span><span class="p">);</span></div><div class='line' id='LC1674'>			<span class="kd">var</span> <span class="nx">diffY</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">endPoint</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC1675'><br/></div><div class='line' id='LC1676'>			<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nx">diffX</span><span class="o">*</span><span class="nx">diffX</span><span class="o">+</span><span class="nx">diffY</span><span class="o">*</span><span class="nx">diffY</span><span class="p">));</span></div><div class='line' id='LC1677'>		<span class="p">}</span></div><div class='line' id='LC1678'><br/></div><div class='line' id='LC1679'>		<span class="cm">/**</span></div><div class='line' id='LC1680'><span class="cm">		* Calculate the zoom factor between the start and end distances</span></div><div class='line' id='LC1681'><span class="cm">		* @param {int} startDistance Distance (between 2 fingers) the user started pinching at</span></div><div class='line' id='LC1682'><span class="cm">	    * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at</span></div><div class='line' id='LC1683'><span class="cm">	    * @return float The zoom value from 0 to 1.</span></div><div class='line' id='LC1684'><span class="cm">		* @inner</span></div><div class='line' id='LC1685'><span class="cm">		*/</span></div><div class='line' id='LC1686'>		<span class="kd">function</span> <span class="nx">calculatePinchZoom</span><span class="p">(</span><span class="nx">startDistance</span><span class="p">,</span> <span class="nx">endDistance</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1687'>			<span class="kd">var</span> <span class="nx">percent</span> <span class="o">=</span> <span class="p">(</span><span class="nx">endDistance</span><span class="o">/</span><span class="nx">startDistance</span><span class="p">)</span> <span class="o">*</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1688'>			<span class="k">return</span> <span class="nx">percent</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC1689'>		<span class="p">}</span></div><div class='line' id='LC1690'><br/></div><div class='line' id='LC1691'><br/></div><div class='line' id='LC1692'>		<span class="cm">/**</span></div><div class='line' id='LC1693'><span class="cm">		* Returns the pinch direction, either IN or OUT for the given points</span></div><div class='line' id='LC1694'><span class="cm">		* @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}</span></div><div class='line' id='LC1695'><span class="cm">		* @see $.fn.swipe.directions</span></div><div class='line' id='LC1696'><span class="cm">		* @inner</span></div><div class='line' id='LC1697'><span class="cm">		*/</span></div><div class='line' id='LC1698'>		<span class="kd">function</span> <span class="nx">calculatePinchDirection</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1699'>			<span class="k">if</span><span class="p">(</span><span class="nx">pinchZoom</span><span class="o">&lt;</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1700'>				<span class="k">return</span> <span class="nx">OUT</span><span class="p">;</span></div><div class='line' id='LC1701'>			<span class="p">}</span></div><div class='line' id='LC1702'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1703'>				<span class="k">return</span> <span class="nx">IN</span><span class="p">;</span></div><div class='line' id='LC1704'>			<span class="p">}</span></div><div class='line' id='LC1705'>		<span class="p">}</span></div><div class='line' id='LC1706'><br/></div><div class='line' id='LC1707'><br/></div><div class='line' id='LC1708'>		<span class="cm">/**</span></div><div class='line' id='LC1709'><span class="cm">		* Calculate the length / distance of the swipe</span></div><div class='line' id='LC1710'><span class="cm">		* @param {point} startPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1711'><span class="cm">	    * @param {point} endPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1712'><span class="cm">	    * @return int</span></div><div class='line' id='LC1713'><span class="cm">		* @inner</span></div><div class='line' id='LC1714'><span class="cm">		*/</span></div><div class='line' id='LC1715'>		<span class="kd">function</span> <span class="nx">calculateDistance</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">,</span> <span class="nx">endPoint</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1716'>			<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">endPoint</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">startPoint</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">endPoint</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">startPoint</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="mi">2</span><span class="p">)));</span></div><div class='line' id='LC1717'>		<span class="p">}</span></div><div class='line' id='LC1718'><br/></div><div class='line' id='LC1719'>		<span class="cm">/**</span></div><div class='line' id='LC1720'><span class="cm">		* Calculate the angle of the swipe</span></div><div class='line' id='LC1721'><span class="cm">		* @param {point} startPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1722'><span class="cm">	    * @param {point} endPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1723'><span class="cm">	    * @return int</span></div><div class='line' id='LC1724'><span class="cm">		* @inner</span></div><div class='line' id='LC1725'><span class="cm">		*/</span></div><div class='line' id='LC1726'>		<span class="kd">function</span> <span class="nx">calculateAngle</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">,</span> <span class="nx">endPoint</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1727'>			<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">startPoint</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">endPoint</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC1728'>			<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">endPoint</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">startPoint</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC1729'>			<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">atan2</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span> <span class="nx">x</span><span class="p">);</span> <span class="c1">//radians</span></div><div class='line' id='LC1730'>			<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">r</span> <span class="o">*</span> <span class="mi">180</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">);</span> <span class="c1">//degrees</span></div><div class='line' id='LC1731'><br/></div><div class='line' id='LC1732'>			<span class="c1">//ensure value is positive</span></div><div class='line' id='LC1733'>			<span class="k">if</span> <span class="p">(</span><span class="nx">angle</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1734'>				<span class="nx">angle</span> <span class="o">=</span> <span class="mi">360</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">angle</span><span class="p">);</span></div><div class='line' id='LC1735'>			<span class="p">}</span></div><div class='line' id='LC1736'><br/></div><div class='line' id='LC1737'>			<span class="k">return</span> <span class="nx">angle</span><span class="p">;</span></div><div class='line' id='LC1738'>		<span class="p">}</span></div><div class='line' id='LC1739'><br/></div><div class='line' id='LC1740'>		<span class="cm">/**</span></div><div class='line' id='LC1741'><span class="cm">		* Calculate the direction of the swipe</span></div><div class='line' id='LC1742'><span class="cm">		* This will also call calculateAngle to get the latest angle of swipe</span></div><div class='line' id='LC1743'><span class="cm">		* @param {point} startPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1744'><span class="cm">	    * @param {point} endPoint A point object containing x and y co-ordinates</span></div><div class='line' id='LC1745'><span class="cm">	    * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}</span></div><div class='line' id='LC1746'><span class="cm">		* @see $.fn.swipe.directions</span></div><div class='line' id='LC1747'><span class="cm">		* @inner</span></div><div class='line' id='LC1748'><span class="cm">		*/</span></div><div class='line' id='LC1749'>		<span class="kd">function</span> <span class="nx">calculateDirection</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">,</span> <span class="nx">endPoint</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1750'>			<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="nx">calculateAngle</span><span class="p">(</span><span class="nx">startPoint</span><span class="p">,</span> <span class="nx">endPoint</span><span class="p">);</span></div><div class='line' id='LC1751'><br/></div><div class='line' id='LC1752'>			<span class="k">if</span> <span class="p">((</span><span class="nx">angle</span> <span class="o">&lt;=</span> <span class="mi">45</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">angle</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1753'>				<span class="k">return</span> <span class="nx">LEFT</span><span class="p">;</span></div><div class='line' id='LC1754'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">angle</span> <span class="o">&lt;=</span> <span class="mi">360</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">angle</span> <span class="o">&gt;=</span> <span class="mi">315</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1755'>				<span class="k">return</span> <span class="nx">LEFT</span><span class="p">;</span></div><div class='line' id='LC1756'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">angle</span> <span class="o">&gt;=</span> <span class="mi">135</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">angle</span> <span class="o">&lt;=</span> <span class="mi">225</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1757'>				<span class="k">return</span> <span class="nx">RIGHT</span><span class="p">;</span></div><div class='line' id='LC1758'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">angle</span> <span class="o">&gt;</span> <span class="mi">45</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">angle</span> <span class="o">&lt;</span> <span class="mi">135</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1759'>				<span class="k">return</span> <span class="nx">DOWN</span><span class="p">;</span></div><div class='line' id='LC1760'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1761'>				<span class="k">return</span> <span class="nx">UP</span><span class="p">;</span></div><div class='line' id='LC1762'>			<span class="p">}</span></div><div class='line' id='LC1763'>		<span class="p">}</span></div><div class='line' id='LC1764'><br/></div><div class='line' id='LC1765'><br/></div><div class='line' id='LC1766'>		<span class="cm">/**</span></div><div class='line' id='LC1767'><span class="cm">		* Returns a MS time stamp of the current time</span></div><div class='line' id='LC1768'><span class="cm">		* @return int</span></div><div class='line' id='LC1769'><span class="cm">		* @inner</span></div><div class='line' id='LC1770'><span class="cm">		*/</span></div><div class='line' id='LC1771'>		<span class="kd">function</span> <span class="nx">getTimeStamp</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1772'>			<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC1773'>			<span class="k">return</span> <span class="nx">now</span><span class="p">.</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC1774'>		<span class="p">}</span></div><div class='line' id='LC1775'><br/></div><div class='line' id='LC1776'><br/></div><div class='line' id='LC1777'><br/></div><div class='line' id='LC1778'>		<span class="cm">/**</span></div><div class='line' id='LC1779'><span class="cm">		 * Returns a bounds object with left, right, top and bottom properties for the element specified.</span></div><div class='line' id='LC1780'><span class="cm">		 * @param {DomNode} The DOM node to get the bounds for.</span></div><div class='line' id='LC1781'><span class="cm">		 */</span></div><div class='line' id='LC1782'>		<span class="kd">function</span> <span class="nx">getbounds</span><span class="p">(</span> <span class="nx">el</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1783'>			<span class="nx">el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC1784'>			<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">offset</span><span class="p">();</span></div><div class='line' id='LC1785'><br/></div><div class='line' id='LC1786'>			<span class="kd">var</span> <span class="nx">bounds</span> <span class="o">=</span> <span class="p">{</span>	</div><div class='line' id='LC1787'>					<span class="nx">left</span><span class="o">:</span><span class="nx">offset</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span></div><div class='line' id='LC1788'>					<span class="nx">right</span><span class="o">:</span><span class="nx">offset</span><span class="p">.</span><span class="nx">left</span><span class="o">+</span><span class="nx">el</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">(),</span></div><div class='line' id='LC1789'>					<span class="nx">top</span><span class="o">:</span><span class="nx">offset</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span></div><div class='line' id='LC1790'>					<span class="nx">bottom</span><span class="o">:</span><span class="nx">offset</span><span class="p">.</span><span class="nx">top</span><span class="o">+</span><span class="nx">el</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">()</span></div><div class='line' id='LC1791'>					<span class="p">}</span></div><div class='line' id='LC1792'><br/></div><div class='line' id='LC1793'>			<span class="k">return</span> <span class="nx">bounds</span><span class="p">;</span>	</div><div class='line' id='LC1794'>		<span class="p">}</span></div><div class='line' id='LC1795'><br/></div><div class='line' id='LC1796'><br/></div><div class='line' id='LC1797'>		<span class="cm">/**</span></div><div class='line' id='LC1798'><span class="cm">		 * Checks if the point object is in the bounds object.</span></div><div class='line' id='LC1799'><span class="cm">		 * @param {object} point A point object.</span></div><div class='line' id='LC1800'><span class="cm">		 * @param {int} point.x The x value of the point.</span></div><div class='line' id='LC1801'><span class="cm">		 * @param {int} point.y The x value of the point.</span></div><div class='line' id='LC1802'><span class="cm">		 * @param {object} bounds The bounds object to test</span></div><div class='line' id='LC1803'><span class="cm">		 * @param {int} bounds.left The leftmost value</span></div><div class='line' id='LC1804'><span class="cm">		 * @param {int} bounds.right The righttmost value</span></div><div class='line' id='LC1805'><span class="cm">		 * @param {int} bounds.top The topmost value</span></div><div class='line' id='LC1806'><span class="cm">		* @param {int} bounds.bottom The bottommost value</span></div><div class='line' id='LC1807'><span class="cm">		 */</span></div><div class='line' id='LC1808'>		<span class="kd">function</span> <span class="nx">isInBounds</span><span class="p">(</span><span class="nx">point</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1809'>			<span class="k">return</span> <span class="p">(</span><span class="nx">point</span><span class="p">.</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span> <span class="o">&amp;&amp;</span> <span class="nx">point</span><span class="p">.</span><span class="nx">x</span> <span class="o">&lt;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">right</span> <span class="o">&amp;&amp;</span> <span class="nx">point</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">&amp;&amp;</span> <span class="nx">point</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">bottom</span><span class="p">);</span></div><div class='line' id='LC1810'>		<span class="p">};</span></div><div class='line' id='LC1811'><br/></div><div class='line' id='LC1812'><br/></div><div class='line' id='LC1813'>	<span class="p">}</span></div><div class='line' id='LC1814'><br/></div><div class='line' id='LC1815'><br/></div><div class='line' id='LC1816'><br/></div><div class='line' id='LC1817'><br/></div><div class='line' id='LC1818'><span class="cm">/**</span></div><div class='line' id='LC1819'><span class="cm"> * A catch all handler that is triggered for all swipe directions. </span></div><div class='line' id='LC1820'><span class="cm"> * @name $.fn.swipe#swipe</span></div><div class='line' id='LC1821'><span class="cm"> * @event</span></div><div class='line' id='LC1822'><span class="cm"> * @default null</span></div><div class='line' id='LC1823'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1824'><span class="cm"> * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1825'><span class="cm"> * @param {int} distance The distance the user swiped</span></div><div class='line' id='LC1826'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1827'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1828'><span class="cm"> */</span></div><div class='line' id='LC1829'>&nbsp;</div><div class='line' id='LC1830'><br/></div><div class='line' id='LC1831'><br/></div><div class='line' id='LC1832'><br/></div><div class='line' id='LC1833'><span class="cm">/**</span></div><div class='line' id='LC1834'><span class="cm"> * A handler that is triggered for &quot;left&quot; swipes.</span></div><div class='line' id='LC1835'><span class="cm"> * @name $.fn.swipe#swipeLeft</span></div><div class='line' id='LC1836'><span class="cm"> * @event</span></div><div class='line' id='LC1837'><span class="cm"> * @default null</span></div><div class='line' id='LC1838'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1839'><span class="cm"> * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1840'><span class="cm"> * @param {int} distance The distance the user swiped</span></div><div class='line' id='LC1841'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1842'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1843'><span class="cm"> */</span></div><div class='line' id='LC1844'>&nbsp;</div><div class='line' id='LC1845'><span class="cm">/**</span></div><div class='line' id='LC1846'><span class="cm"> * A handler that is triggered for &quot;right&quot; swipes.</span></div><div class='line' id='LC1847'><span class="cm"> * @name $.fn.swipe#swipeRight</span></div><div class='line' id='LC1848'><span class="cm"> * @event</span></div><div class='line' id='LC1849'><span class="cm"> * @default null</span></div><div class='line' id='LC1850'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1851'><span class="cm"> * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1852'><span class="cm"> * @param {int} distance The distance the user swiped</span></div><div class='line' id='LC1853'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1854'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1855'><span class="cm"> */</span></div><div class='line' id='LC1856'><br/></div><div class='line' id='LC1857'><span class="cm">/**</span></div><div class='line' id='LC1858'><span class="cm"> * A handler that is triggered for &quot;up&quot; swipes.</span></div><div class='line' id='LC1859'><span class="cm"> * @name $.fn.swipe#swipeUp</span></div><div class='line' id='LC1860'><span class="cm"> * @event</span></div><div class='line' id='LC1861'><span class="cm"> * @default null</span></div><div class='line' id='LC1862'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1863'><span class="cm"> * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1864'><span class="cm"> * @param {int} distance The distance the user swiped</span></div><div class='line' id='LC1865'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1866'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1867'><span class="cm"> */</span></div><div class='line' id='LC1868'>&nbsp;</div><div class='line' id='LC1869'><span class="cm">/**</span></div><div class='line' id='LC1870'><span class="cm"> * A handler that is triggered for &quot;down&quot; swipes.</span></div><div class='line' id='LC1871'><span class="cm"> * @name $.fn.swipe#swipeDown</span></div><div class='line' id='LC1872'><span class="cm"> * @event</span></div><div class='line' id='LC1873'><span class="cm"> * @default null</span></div><div class='line' id='LC1874'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1875'><span class="cm"> * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1876'><span class="cm"> * @param {int} distance The distance the user swiped</span></div><div class='line' id='LC1877'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1878'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1879'><span class="cm"> */</span></div><div class='line' id='LC1880'>&nbsp;</div><div class='line' id='LC1881'><span class="cm">/**</span></div><div class='line' id='LC1882'><span class="cm"> * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.</span></div><div class='line' id='LC1883'><span class="cm"> * This is triggered regardless of swipe thresholds.</span></div><div class='line' id='LC1884'><span class="cm"> * @name $.fn.swipe#swipeStatus</span></div><div class='line' id='LC1885'><span class="cm"> * @event</span></div><div class='line' id='LC1886'><span class="cm"> * @default null</span></div><div class='line' id='LC1887'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1888'><span class="cm"> * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}</span></div><div class='line' id='LC1889'><span class="cm"> * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1890'><span class="cm"> * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.</span></div><div class='line' id='LC1891'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1892'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1893'><span class="cm"> */</span></div><div class='line' id='LC1894'>&nbsp;</div><div class='line' id='LC1895'><span class="cm">/**</span></div><div class='line' id='LC1896'><span class="cm"> * A handler triggered for pinch in events.</span></div><div class='line' id='LC1897'><span class="cm"> * @name $.fn.swipe#pinchIn</span></div><div class='line' id='LC1898'><span class="cm"> * @event</span></div><div class='line' id='LC1899'><span class="cm"> * @default null</span></div><div class='line' id='LC1900'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1901'><span class="cm"> * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1902'><span class="cm"> * @param {int} distance The distance the user pinched</span></div><div class='line' id='LC1903'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1904'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1905'><span class="cm"> * @param {int} zoom The zoom/scale level the user pinched too, 0-1.</span></div><div class='line' id='LC1906'><span class="cm"> */</span></div><div class='line' id='LC1907'><br/></div><div class='line' id='LC1908'><span class="cm">/**</span></div><div class='line' id='LC1909'><span class="cm"> * A handler triggered for pinch out events.</span></div><div class='line' id='LC1910'><span class="cm"> * @name $.fn.swipe#pinchOut</span></div><div class='line' id='LC1911'><span class="cm"> * @event</span></div><div class='line' id='LC1912'><span class="cm"> * @default null</span></div><div class='line' id='LC1913'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1914'><span class="cm"> * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1915'><span class="cm"> * @param {int} distance The distance the user pinched</span></div><div class='line' id='LC1916'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1917'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1918'><span class="cm"> * @param {int} zoom The zoom/scale level the user pinched too, 0-1.</span></div><div class='line' id='LC1919'><span class="cm"> */</span> </div><div class='line' id='LC1920'><br/></div><div class='line' id='LC1921'><span class="cm">/**</span></div><div class='line' id='LC1922'><span class="cm"> * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.</span></div><div class='line' id='LC1923'><span class="cm"> * @name $.fn.swipe#pinchStatus</span></div><div class='line' id='LC1924'><span class="cm"> * @event</span></div><div class='line' id='LC1925'><span class="cm"> * @default null</span></div><div class='line' id='LC1926'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1927'><span class="cm"> * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}</span></div><div class='line' id='LC1928'><span class="cm"> * @param {int} distance The distance the user pinched</span></div><div class='line' id='LC1929'><span class="cm"> * @param {int} duration The duration of the swipe in milliseconds</span></div><div class='line' id='LC1930'><span class="cm"> * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}</span></div><div class='line' id='LC1931'><span class="cm"> * @param {int} zoom The zoom/scale level the user pinched too, 0-1.</span></div><div class='line' id='LC1932'><span class="cm"> */</span></div><div class='line' id='LC1933'><br/></div><div class='line' id='LC1934'><span class="cm">/**</span></div><div class='line' id='LC1935'><span class="cm"> * A click handler triggered when a user simply clicks, rather than swipes on an element.</span></div><div class='line' id='LC1936'><span class="cm"> * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.</span></div><div class='line' id='LC1937'><span class="cm"> * You cannot use &lt;code&gt;on&lt;/code&gt; to bind to this event as the default jQ &lt;code&gt;click&lt;/code&gt; event will be triggered.</span></div><div class='line' id='LC1938'><span class="cm"> * Use the &lt;code&gt;tap&lt;/code&gt; event instead.</span></div><div class='line' id='LC1939'><span class="cm"> * @name $.fn.swipe#click</span></div><div class='line' id='LC1940'><span class="cm"> * @event</span></div><div class='line' id='LC1941'><span class="cm"> * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead </span></div><div class='line' id='LC1942'><span class="cm"> * @default null</span></div><div class='line' id='LC1943'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1944'><span class="cm"> * @param {DomObject} target The element clicked on.</span></div><div class='line' id='LC1945'><span class="cm"> */</span></div><div class='line' id='LC1946'>&nbsp;</div><div class='line' id='LC1947'>&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1948'><span class="cm"> * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.</span></div><div class='line' id='LC1949'><span class="cm"> * @name $.fn.swipe#tap</span></div><div class='line' id='LC1950'><span class="cm"> * @event</span></div><div class='line' id='LC1951'><span class="cm"> * @default null</span></div><div class='line' id='LC1952'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1953'><span class="cm"> * @param {DomObject} target The element clicked on.</span></div><div class='line' id='LC1954'><span class="cm"> */</span></div><div class='line' id='LC1955'>&nbsp;</div><div class='line' id='LC1956'><span class="cm">/**</span></div><div class='line' id='LC1957'><span class="cm"> * A double tap handler triggered when a user double clicks or taps on an element.</span></div><div class='line' id='LC1958'><span class="cm"> * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property. </span></div><div class='line' id='LC1959'><span class="cm"> * Note: If you set both &lt;code&gt;doubleTap&lt;/code&gt; and &lt;code&gt;tap&lt;/code&gt; handlers, the &lt;code&gt;tap&lt;/code&gt; event will be delayed by the &lt;code&gt;doubleTapThreshold&lt;/code&gt;</span></div><div class='line' id='LC1960'><span class="cm"> * as the script needs to check if its a double tap.</span></div><div class='line' id='LC1961'><span class="cm"> * @name $.fn.swipe#doubleTap</span></div><div class='line' id='LC1962'><span class="cm"> * @see  $.fn.swipe.defaults#doubleTapThreshold</span></div><div class='line' id='LC1963'><span class="cm"> * @event</span></div><div class='line' id='LC1964'><span class="cm"> * @default null</span></div><div class='line' id='LC1965'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1966'><span class="cm"> * @param {DomObject} target The element clicked on.</span></div><div class='line' id='LC1967'><span class="cm"> */</span></div><div class='line' id='LC1968'>&nbsp;</div><div class='line' id='LC1969'>&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1970'><span class="cm"> * A long tap handler triggered when a user long clicks or taps on an element.</span></div><div class='line' id='LC1971'><span class="cm"> * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. </span></div><div class='line' id='LC1972'><span class="cm"> * @name $.fn.swipe#longTap</span></div><div class='line' id='LC1973'><span class="cm"> * @see  $.fn.swipe.defaults#longTapThreshold</span></div><div class='line' id='LC1974'><span class="cm"> * @event</span></div><div class='line' id='LC1975'><span class="cm"> * @default null</span></div><div class='line' id='LC1976'><span class="cm"> * @param {EventObject} event The original event object</span></div><div class='line' id='LC1977'><span class="cm"> * @param {DomObject} target The element clicked on.</span></div><div class='line' id='LC1978'><span class="cm"> */</span></div><div class='line' id='LC1979'><br/></div><div class='line' id='LC1980'><span class="p">}));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05031s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

