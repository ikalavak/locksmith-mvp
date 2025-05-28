FROM ubuntu:22.04

RUN apt update && \
    DEBIAN_FRONTEND=noninteractive apt install -y \
    build-essential cmake git ninja-build curl libssl-dev

# Clone and build liboqs with KEM tests
RUN git clone --branch main https://github.com/open-quantum-safe/liboqs.git && \
    cd liboqs && mkdir build && cd build && \
    cmake -GNinja -DOQS_BUILD_TESTS=ON .. && \
    ninja && ninja install

WORKDIR /liboqs/build/tests

CMD ["./test_kex"]
