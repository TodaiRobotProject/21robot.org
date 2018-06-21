#!/usr/bin/ruby

require 'csv'

def esc(str)
    str.gsub("&", "&amp;")
       .gsub("'", "&apos;")
       .gsub("\"", "&quot;")
       .gsub("<", "&lt;")
       .gsub(">", "&gt;")
end

def add_link(url, title)
    if url
        "<a href='#{esc(url)}'>#{esc(title)}</a>"
    else
        "<b>#{esc(title)}</b>"
    end
end

def gen_item(rec)
    "<ul><li>" + \
        esc(rec[:author]) + "<br/>" + \
        add_link(rec[:url], rec[:title]) + ",<br/>" + \
        esc(rec[:bib]) + \
    "</li></ul>"
end

if ARGV.size != 2
    abort "Usage: #{$0} <template> <csv>\n"
end

fn_tmpl = ARGV[0]
fn_csv = ARGV[1]

tmpl = nil
File.open(fn_tmpl) do |f|
    tmpl = f.read
end

csv_raw = CSV.read(fn_csv)
list = csv_raw[1..-1].map {|row|
    { :type   => row[0].to_i - 1, # 0: 国際学会・論文誌; 1: その他
      :year   => row[1],
      :author => row[2],
      :title  => row[3],
      :bib    => row[4],
      :url    => row[5] }
}

by_year_type = {}
list.each do |rec|
    by_year_type[rec[:year]] ||= [[], []]
    by_year_type[rec[:year]][rec[:type]] << rec
end

html_lines = []
by_year_type.keys.sort.reverse.each do |year|
    html_lines << "<h3>#{year}</h3>"
    type0, type1 = by_year_type[year]
    if ! type0.empty?
        html_lines << "<ol style='list-style-type: none'><li><h4>国際学会・論文誌</h4></li></ol>"
        type0.each do |rec|
            html_lines << gen_item(rec)
        end
    end
    if ! type1.empty?
        html_lines << "<ol style='list-style-type: none'><li><h4>その他</h4></li></ol>"
        type1.each do |rec|
            html_lines << gen_item(rec)
        end
    end
end

list_html = html_lines.join("\n") + "\n"

tmpl.sub!('<div class="content publist" />', '<div class="content publist">' + list_html + '</div>')

print tmpl
