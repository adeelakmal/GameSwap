FROM postgres:13

ENV POSTGRES_USER=gameswap
ENV POSTGRES_PASSWORD=gameswap_secret
ENV POSTGRES_DB=gameswap

EXPOSE 5432

CMD ["postgres"]