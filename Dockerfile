FROM ruby

WORKDIR /app

ENV PORT 3000

EXPOSE $PORT

RUN apt-get update -qq && apt-get install -y nodejs

COPY . /app
RUN gem install bundler
RUN bundle install

