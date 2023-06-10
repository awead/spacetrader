FROM ruby

RUN apt-get update -qq && apt-get install -y nodejs

WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
COPY vendor /app/vendor
RUN gem install bundler
RUN bundle install
ENTRYPOINT [ "/app/bin/startup" ]

