FROM ruby

RUN apt-get update -qq && apt-get install -y nodejs vim npm

WORKDIR /app
COPY Gemfile Gemfile.lock package.json yarn.lock /app
COPY vendor /app/vendor

RUN npm install -g yarn
RUN yarn
RUN gem install bundler
RUN bundle install
ENTRYPOINT [ "/app/bin/startup" ]

