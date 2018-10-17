#!/usr/bin/env ruby

if !File.directory?("./assets") then
    IO.popen("svn export --force https://github.com/falgon/roki/branches/gh-pages/assets ./assets").each do |out|
        print out
    end
end
