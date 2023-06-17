FROM ruby

RUN apt-get update -qq && apt-get install -y nodejs vim npm

WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY vendor /app/vendor

RUN npm install -g yarn
RUN yarn
RUN gem install bundler
RUN bundle install
ENTRYPOINT [ "/app/bin/startup" ]

