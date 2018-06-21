function head(lang, path, docroot)
{
    html = '  <meta http-equiv="content-type" content="text/html; charset=UTF-8">' +
           '  <meta http-equiv="content-language" content="' + lang + '">' +
           '  <meta name="robots" content="index,follow">' +
           '  <meta name="keywords" content="人工知能,グランドチャレンジ,国立情報学研究所,ロボット,入試,東大,大学入試,Artificial Intelligence, A.I.,robot,NII">' +
           '  <meta name="description" content="国立情報学研究所（NII）が推進しているグランドチャレンジプロジェクト「東大入試に迫るコンピュータから見えてくるもの」（略称：人工頭脳プロジェクト）のホームページです。">' +
           '  <meta name="rating" content="General">' +
           '  <meta name="author" content="National Institute of Informatics">' +
           '  <meta name="copyright" content="Copyright © 2011-2021">' +
           '  <meta http-equiv="content-script-type" content="text/javascript">' +
           '  <meta http-equiv="content-style-type" content="text/css">' +
           '  <link rel="canonical" href="http://21robot.org/' + path + '">' +
           '  <link href="' + docroot + 'images/torobo.ico" rel="SHORTCUT ICON">' +
           '  <link class="_common_css" rel="stylesheet" type="text/css" media="all" href="' + docroot + 'css/torobo.css" />' +
           '  <link id="www.researchmap.jp_style" rel="stylesheet" href="https://api.researchmap.jp/css/widget/style.css" type="text/css">' +
           '  <link id="www.researchmap.jp_error" rel="stylesheet" href="https://api.researchmap.jp/css/widget/error/style.css" type="text/css">' +
           '  <link id="www.researchmap.jp_template4" rel="stylesheet" href="https://api.researchmap.jp/css/widget/4/style.css" type="text/css">' +
           '  <link id="www.researchmap.jp_template3" rel="stylesheet" href="https://api.researchmap.jp/css/widget/3/style.css" type="text/css">'
           ;

    document.write(html);
}

var menu_e = [
    {"name": "Home", "path": "index-e.html",
     "children": [
        {"name": "About the Project", "path": "introduce/index-e.html",
         "children": [
            {"name": "NII Interview",          "path": "introduce/NII-Interview-e.html"},
            {"name": "NII Special 1",          "path": "introduce/NII-Special-1-e.html"},
            {"name": "NII Special 2",          "path": "introduce/NII-Special-2-e.html"},
            {"name": "That's Collaboration 1", "path": "introduce/Thats-Collaboration-1-e.html"},
            {"name": "That's Collaboration 2", "path": "introduce/Thats-Collaboration-2-e.html"},
            {"name": "NII Essay",              "path": "introduce/NII-Essay-e.html"}]}]},
     {"name": "News",                "path": "news-e.html"},
     {"name": "Publications",        "path": "publications-e.html"},
     {"name": "Research Activities", "path": "research_activities/index-e.html",
      "children": [
         {"name": "Social Studies", "path": "research_activities/social_studies/index-e.html"},
         {"name": "Math",           "path": "research_activities/math/index-e.html"},
         {"name": "English",        "path": "research_activities/english/index-e.html"},
         {"name": "Japanese",       "path": "research_activities/japanese/index-e.html"}]},
     //{"name": "FAQ",     "path": "FAQ-e.html"},
     {"name": "Contact", "path": "contact-e.html"}
];

var menu_j = [
    {"name": "ホーム", "path": "index.html",
     "children": [
        {"name": "プロジェクトの紹介", "path": "introduce/index.html",
         "children": [
            {"name": "NII Interview",          "path": "introduce/NII-Interview.html"},
            {"name": "NII Special 1",          "path": "introduce/NII-Special-1.html"},
            {"name": "NII Special 2",          "path": "introduce/NII-Special-2.html"},
            {"name": "That's Collaboration 1", "path": "introduce/Thats-Collaboration-1.html"},
            {"name": "That's Collaboration 2", "path": "introduce/Thats-Collaboration-2.html"},
            {"name": "NII Essay",              "path": "introduce/NII-Essay.html"}]}]},
     {"name": "ニュース",     "path": "news.html"},
     {"name": "イベント",     "path": "event.html"},
     {"name": "研究活動",     "path": "research_activities/index.html",
      "children": [
         {"name": "社会", "path": "research_activities/social_studies/index.html"},
         {"name": "数学", "path": "research_activities/math/index.html",
            "children": [{"name": "プロジェクトメンバー", "path": "research_activities/math/members.html"}]},
         {"name": "理科", "path": "research_activities/science/index.html",
            "children": [{"name": "プロジェクトメンバー", "path": "research_activities/science/members.html"}]},
         {"name": "英語", "path": "research_activities/english/index.html"},
         {"name": "国語", "path": "research_activities/japanese/index.html"},
         {"name": "連携基盤", "path": "research_activities/cooperation_platform/index.html",
            "children": [{"name": "プロジェクトメンバー", "path": "research_activities/cooperation_platform/members.html"}]},
         {"name": "研究成果",   "path": "research_activities/research_accomplishments/index.html"}]},
     {"name": "これまでの歩み", "path": "progress.html"},
     //{"name": "FAQ",            "path": "FAQ.html"},
     {"name": "お問い合わせ",   "path": "contact.html"}
];

function menu(tree, current, docroot)
{
    open =  '<div id="__leftcolumn" class="main_column">' +
            '  <table class="widthmax" summary="">' +
            '    <tbody>' +
            '      <tr>' +
            '        <td class="column valign-top">' +
            '          <div class="cell" style="padding:8px 8px 8px 8px;">' +
            '            <table id="_216" class="blockstyle_216 module_box 21robot_default" style="width:160px">' +
            '              <tbody>' +
            '                <tr>' +
            '                  <td>' +
            '                    <table class="th_none widthmax" cellspacing="0" cellpadding="0" border="0">' +
            '                      <tbody>' +
            '                        <tr>' +
            '                          <td class="th_21robot_content">' +
            '                            <div class="content">' +
            '                              <div class="outerdiv">';
    close = '                              </div>' +
            '                            </div>' +
            '                          </td>' +
            '                        </tr>' +
            '                      </tbody>' +
            '                    </table>' +
            '                  </td>' +
            '                </tr>' +
            '              </tbody>' +
            '            </table>' +
            '          </div>' +
            '        </td>' +
            '      </tr>' +
            '    </tbody>' +
            '  </table>' +
            '</div>';

    document.write(open + menu_itr(true, tree, [], current, docroot) + close);
}

function match(path, current)
{
    for (var i = 0; i < path.length; ++i) {
        if (current[i] && path[i] == current[i]) {
            // OK
        }
        else {
            return false;
        }
    }
    return true;
}

function menu_itr(is_root, items, node, current, docroot)
{
    html = '';

    for (var i = 0; i < items.length; ++i) {
        next = node.concat([items[i]["name"]]);

        if (is_root && i == 0) {
            html += '<div class="menu_top_page_robot">' +
                    '  <a href="' + docroot + items[0]["path"] + '" class="menu_top_public menulink highlight menu_top_page_href">' + 
                    '    <img class="icon" src="' + docroot + 'images/right_arrow.gif" alt="" />' + items[0]["name"] + 
                    '  </a>' +
                    '</div>';
        }
        else {
            icon = items[i]["children"] ? (match(next, current) ? "down_arrow.gif"
                                                                : "right_arrow.gif")
                                        : "dot.gif";
            klass = is_root ? "menu_top_public" : "menu_public";
            active = (next == current) ? "highlight _menu_active" : "";
            depth = is_root ? "" : (' style="margin-left:' + (15 * node.length) + 'px;"');

            html += '<a class="link menulink ' + klass + ' nowrap ' + active + ' hover_highlight" href="' + docroot + items[i]["path"] + '"' + depth + '>' +
                    '<img class="icon" src="' + docroot + 'images/' + icon + '" alt="" />' + items[i]["name"] + '</a>';
        }

        if (items[i]["children"] && ((is_root && i == 0) || match(next, current))) {
            html += menu_itr(false, items[i]["children"], next, current, docroot);
        }
    }

    return html;
}

