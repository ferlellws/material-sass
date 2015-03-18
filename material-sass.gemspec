# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'material-sass/version'

Gem::Specification.new do |spec|
  spec.name          = "material-sass"
  spec.version       = Material::Sass::VERSION
  spec.authors       = ["Mohd Khairi"]
  spec.email         = ["khairi@labs.my"]
  spec.summary       = %q{HTML5 UI design based on Google Material}
  spec.description   = %q{HTML5 UI design based on Google Material.}
  spec.homepage      = "https://github.com/mkhairi/material-sass"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
