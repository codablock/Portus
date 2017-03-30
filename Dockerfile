FROM library/ruby:2.3.1
MAINTAINER Flavio Castelli <fcastelli@suse.com>

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs

ENV COMPOSE=1
EXPOSE 3000

WORKDIR /portus
COPY Gemfile* ./
RUN bundle install --retry=3 && bundle binstubs phantomjs

COPY package.json ./
RUN npm install

ADD . .

RUN rake portus:assets:compile
