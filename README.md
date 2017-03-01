# Missouri realtime Medicaid payments, coverage, and eligibility prototype

## Running locally

The easiest way to get it running is with
[Docker](https://www.docker.com/products/docker).  Clone the
repo locally and then just get everything started:

```bash
git clone https://github.com/18F/acq-mo-medicaid-prototype-realtime-view.git
cd acq-mo-medicaid-prototype-realtime-view
docker-compose up -d
```

Once it's running, the website should be available at
[localhost:8080](http://localhost:8080)

This will start all the Docker pieces in "detached" mode,
meaning that it will run in the background.  If you want to run
it in the foreground, just leave off the `-d`. To stop
everything, run:

```bash
docker-compose down
```

This Docker configuration launches three services:

|Service|What it does|
|---|---|
|web|Serves up the actual website|
|frontend-build|Watches for code changes and rebuilds the website as the code changes.|
|api|Serves the backing data that makes the website go|

## Public domain

This project is in the worldwide [public domain](LICENSE.md).
As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States,
> and copyright and related rights in the work worldwide are
> waived through the
> [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).  

> All contributions to this project will be released under the
> CC0 dedication. By submitting a   pull request, you are
> agreeing to comply with this waiver of copyright interest.
